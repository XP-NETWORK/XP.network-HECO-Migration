# XP-HECO Migration

See web3-mint-contract for a wip multisig minter  

See validator for a wip web3 ChainListener

## Current status:
- We can send transactions from a substrate chain to a web3 testnet and backwards freezing the parachain native tokens in the Freezer SC in the parachain and releasing wrapped ERC-20 compatible tokens to a designated account!
- We can send transactions from a HECO testnet to a Substrate Parachain and backwards freezing HT in the Freezer SC deployed in HECO and releasing wrapped ERC-20 compatible HTs to a designated account in a Substrate Parachain!

- run tests on HECO's testnet

## TODO:
- Add new bridge UI (in React)
- Set up the entire testnet in an AWS EC2 instance.
- Migrate the "Freezer" SC written in Ink! to a Substrate Pallet in Rust.

