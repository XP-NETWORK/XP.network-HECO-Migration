#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;
extern crate alloc;

#[ink::contract]
pub mod freezer {
    use alloc::{vec::Vec, string::String};
    use sp_core::H160;
    use ink_prelude::format;
    use ink_storage::traits::{SpreadLayout, PackedLayout};
    use scale::{
        Decode,
        Encode,
    };
    use ink_env::call::*;
    #[cfg(feature = "std")]
    use scale_info::TypeInfo;

    /// Contract Storage
    /// Stores a list of validators
    #[derive(Default)]
    #[ink(storage)]
    pub struct Freezer {
        validators: ink_storage::collections::HashMap<AccountId, ()>, // O(1) contains
        // action_id: pop_info
        pop_action: ink_storage::collections::HashMap<String, ActionInfo>,
        last_action: u128
    }

    /// Transfer to elrond chain event
    /// validators must subscribe to this
    #[ink(event)]
    pub struct Transfer {
        action_id: u128,
        to: String,
        value: Balance
    }

    #[ink(event)]
    pub struct ScCall {
        action_id: u128,
        to: String,
        endpoint: String,
        args: Vec<Vec<u8>> // TODO: Multiple Args
    }

    #[derive(Clone, Debug, PartialEq, Encode, Decode, SpreadLayout, PackedLayout)]
    #[cfg_attr(feature = "std", derive(TypeInfo))]
    pub enum Action {
        Unfreeze {
            to: AccountId,
            value: Balance
        },
        RpcCall {
            to: AccountId,
            value: Balance,
            endpoint: [u8; 4],
            args: Option<u32>
        }
    }


    #[derive(Clone, Debug, PartialEq, Encode, Decode, SpreadLayout, PackedLayout)]
    #[cfg_attr(feature = "std", derive(TypeInfo))]
    pub struct ActionInfo {
        action: Action,
        validators: u32, // TODO: Use HSet
    }

    impl ActionInfo {
        fn new(action: Action) -> Self {
            Self {
                action,
                validators: 0,
            }
        }
    }

    // Hack
    impl Default for ActionInfo {
        fn default() -> Self {
            unimplemented!()
        }
    }

    impl Eq for ActionInfo {}

    impl Freezer {
        #[ink(constructor)]
        pub fn default() -> Self {
            Self { 
                validators: Default::default(),
                pop_action: Default::default(),
                last_action: 0
            }
        }

        /// Emit a transfer event while locking
        /// existing coins
        #[ink(message)]
        #[ink(payable)]
        pub fn send(&mut self, to: [u8; 20]) {
            let addr = H160::from_slice(&to);

            let val = self.env().transferred_balance();
            if val == 0 {
                panic!("Value must be > 0!")
            }
            self.last_action += 1;
            self.env().emit_event( Transfer {
                action_id: self.last_action,
                to: format!("0x{:020x}", addr),
                value: val,
            } )
        }

        fn exec_action(&mut self, action: Action) {
            match action {
                Action::Unfreeze { to, value } => self.env().transfer(to, value).unwrap(),
                Action::RpcCall { to, value, endpoint, args } => {
                    if let Some(arg) = args {
                        let exargs = ExecutionInput::new(Selector::new(endpoint))
                            .push_arg(arg.clone()); // TODO: Support multiple args

                        self.env().invoke_contract(
                            &build_call()
                                .callee(to)
                                .transferred_value(value)
                                .exec_input(exargs)
                                .returns::<()>()
                                .params()
                        ).unwrap();
                    } else {
                        self.env().invoke_contract(
                            &build_call()
                                .callee(to)
                                .transferred_value(value)
                                .exec_input(ExecutionInput::new(Selector::new(endpoint)))
                                .returns::<()>()
                                .params()
                        ).unwrap();
                    }
                }
            }
        }

        fn verify_action(&mut self, action_id: String, action: Action) {
            let caller = self.env().caller();
            if self.validators.get(&caller).is_none() {
                panic!("not a validator!")
            }
            let validator_cnt = self.validator_cnt();

            let ref mut info = self.pop_action.entry(action_id.clone())
                .or_insert_with(|| ActionInfo::new(action));
            info.validators += 1;
            let act = info.action.clone();
            let validated = info.validators;
            core::mem::drop(info);

            if validated == (2*validator_cnt/3)+1 {
                self.exec_action(act);
            }

            if validated == validator_cnt {
                self.pop_action.take(&action_id).unwrap();
            }
        }

        /// unfreeze tokens and send them to an address
        /// only validators can call this
        #[ink(message)]
        pub fn pop(&mut self, action_id: String, to: AccountId, value: Balance) {
            self.verify_action(action_id, Action::Unfreeze { to, value })
        }

        /// Subscribe to events & become a validator
        /// TODO: Proper implementation
        #[ink(message)]
        pub fn subscribe(&mut self) {
            self.validators.insert(self.env().caller(), ());
        }

        /// Number of validators
        /// only for debugging
        #[ink(message)]
        pub fn validator_cnt(&self) -> u32 {
            self.validators.len()
        }

        fn pop_cnt(&self) -> u32 {
            self.pop_action.len()
        }
    }

    /// Unit tests in Rust are normally defined within such a `#[cfg(test)]`
    /// module and test functions are marked with a `#[test]` attribute.
    /// The below code is technically just normal Rust code.
    #[cfg(test)]
    mod tests {
        /// Imports all the definitions from the outer scope so we can use them here.
        use super::*;

        /// Imports `ink_lang` so we can use `#[ink::test]`.
        use ink_lang as ink;

        /// Check default impl 
        #[ink::test]
        fn default_works() {
            let freezer = Freezer::default();
            assert_eq!(freezer.validator_cnt(), 0);
        }

        /// Check if validators can be added
        #[ink::test]
        fn subscribe_test() {
            let mut freezer = Freezer::default();
            freezer.subscribe();
            assert_eq!(freezer.validator_cnt(), 1);
        }

        #[ink::test]
        fn send_test() {
            let mut freezer = Freezer::default();
            freezer.send("erd1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssycr6th".to_string());
            let evs = ink_env::test::recorded_events().collect::<Vec<_>>();
            assert_eq!(evs.len(), 1);
        }

        /// Check if validators can pop transactions properly
        #[ink::test]
        fn pop() {
            let mut freezer = Freezer::default();

            let acc: AccountId = ink_env::test::default_accounts::<ink_env::DefaultEnvironment>().unwrap().alice;
            let action = "0".to_string();

            //assert!(!freezer.pop(action.clone(), acc.clone().into(), 0x0));

            freezer.subscribe();
            freezer.pop(action.clone(), acc.clone().into(), 0x0);
            assert_eq!(freezer.pop_cnt(), 0)
        }
    }
}
