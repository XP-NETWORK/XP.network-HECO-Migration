pragma solidity ^0.8;

contract MultisigWallet {
	uint256 _threshold;
	address _token;

    mapping (address=>uint8) _validators;
    uint256 _validator_cnt;

    struct TransferAction {
        address payable to;
        uint256 value;
    }

	struct TransferInfo {
		TransferAction action;
		uint256 validator_cnt;
	}

    mapping (uint128=>TransferInfo) _transfers;
	mapping (uint128=>mapping (address=>uint8)) _action_validators;

    constructor(address[] memory validators, uint16 threshold, address token) {
		require(validators.length > 0);
		require(threshold > 0 && threshold <= validators.length);

		for (uint i = 0; i < validators.length; i++) {
			_validators[validators[i]] = 2;
		}
		_validator_cnt = validators.length;
		_threshold = threshold;
		_token = token;
    }

    function validator_cnt() public view returns(uint256) {
        return _validator_cnt;
    }

	function execute_mint_token(address payable to, uint256 value) internal {
		// TODO
	}

    function validate_transfer(uint128 action_id, address payable to, uint256 value) public {
        require(_validators[msg.sender] == 2);

		if (_transfers[action_id].validator_cnt == 0) {
			_transfers[action_id] = TransferInfo(
				TransferAction(to, value),
				1
			);
			_action_validators[action_id][msg.sender] = 2;
		} else {
			require(_action_validators[action_id][msg.sender] != 2);
			_transfers[action_id].validator_cnt += 1;
			_action_validators[action_id][msg.sender] = 2;
		}

		if (_transfers[action_id].validator_cnt == _threshold) {
			execute_mint_token(to, value);
		}

		if (_transfers[action_id].validator_cnt == _validator_cnt) {
			delete _transfers[action_id];
			// TODO: Should we clear _action_validators?
		}
    }
}
