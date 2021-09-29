pragma solidity ^0.8;

import "./XPNft.sol";
import "./XPNet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "solidity-bytes-utils/contracts/BytesLib.sol";

contract Minter is Pausable {
	using BytesLib for bytes;
	using SafeCast for uint256;
	using EnumerableSet for EnumerableSet.AddressSet;

	uint256 private threshold;
	uint256 private action_cnt = 0;
	uint256 private nft_cnt = 0x0;
	uint256 private tx_fees = 0x0;
	XPNft private nft_token;
	XPNet private token;

	EnumerableSet.AddressSet private validators;
	mapping (address=>uint8) private nft_whitelist;

	enum ValidationRes {
		Execute,
		Noop
	}

	enum Action {
		// Bridge actions
		Transfer,
		TransferUnique,
		Unfreeze,
		UnfreezeUnique,

		// Bridge status
		WhitelistNft,
		PauseBridge,
		UnpauseBridge,

		// Multisig
		AddValidator,
		RemoveValidator,
		SetThreshold,
		WithdrawFees
	}

	struct ActionInfo {
		Action action;
		bytes action_data;
		uint256 validator_cnt;
		uint256 read_cnt;
	}

	struct TransferAction {
		uint64 chain_nonce;
		address to;
		uint256 value;
	}

	struct TransferNftAction {
		address to;
		string data;
	}

	struct UnfreezeAction {
		address to;
		uint256 value;
	}

	struct UnfreezeNftAction {
		address to;
		uint256 tokenId;
		address contract_addr;
	}

	event Transfer(uint256 action_id, uint64 chain_nonce, uint256 txFees, string to, uint256 value); // Transfer ETH to polkadot
	event TransferErc721(uint256 action_id, uint64 chain_nonce, uint256 txFees, string to, uint256 id, address contract_addr); // Transfer Erc721 to polkadot
	event Unfreeze(uint256 action_id, uint64 chain_nonce, uint256 txFees, string to, uint256 value); // Unfreeze XPNET on polkadot
	event UnfreezeNft(uint256 action_id, uint256 txFees, string to, string data); // Unfreeze NFT on polkaot
	event QuorumFailure(uint256 action_id);

	mapping (uint128=>ActionInfo) private actions;
	mapping (uint128=>mapping (address=>uint8)) private action_validators;

	modifier requireFees {
		require(msg.value > 0, "Tx Fees is required!");
		_;
	}

	constructor(address[] memory _validators, IERC721[] memory _nft_whitelist, uint16 _threshold, XPNft _nft_token, XPNet _token) {
		require(_validators.length > 0, "Validators must not be empty!");
		require(_threshold > 0 && _threshold <= _validators.length, "invalid threshold!");

		for (uint i = 0; i < _validators.length; i++) {
			validators.add(_validators[i]);
		}
		for (uint i = 0; i < _nft_whitelist.length; i++) {
			nft_whitelist[address(_nft_whitelist[i])] = 2;
		}

		threshold = _threshold;
		nft_token = _nft_token;
		token = _token;
	}

	function validate_action(uint128 action_id, Action action, bytes memory action_data) private returns (ValidationRes) {
		require(validators.contains(msg.sender), "Not a validator!");

		if (actions[action_id].validator_cnt == 0) {
			actions[action_id] = ActionInfo(action, action_data, 1, 1);
		} else {
			require(action_validators[action_id][msg.sender] != 2, "Duplicate Validator!");

			actions[action_id].read_cnt += 1;
			require(actions[action_id].action == action, "Action Mismatch");
			require(actions[action_id].action_data.equal(action_data), "Action Mismatch");
			actions[action_id].validator_cnt += 1;
		}

		action_validators[action_id][msg.sender] = 2;

		ValidationRes res = ValidationRes.Noop;
		if (actions[action_id].validator_cnt == threshold) {
			res = ValidationRes.Execute;
		}

		if (actions[action_id].read_cnt == validators.length()) {
			delete actions[action_id];
			if (actions[action_id].validator_cnt < threshold) {
				// _pause(); (should we pause?)
				emit QuorumFailure(action_id); // Quorum Failed, manual intervention required
			}
		}

		return res;
	}

	// Transfer XPNET
	function validate_transfer(uint128 action_id, uint64 chain_nonce, address to, uint256 value) public whenNotPaused {
		bytes memory action_data = abi.encode(TransferAction(chain_nonce, to, value));
		ValidationRes res = validate_action(action_id, Action.Transfer, action_data);
		if (res == ValidationRes.Execute) {
			token.mint(to, chain_nonce, value);
		}
	}

	// Transfer Foreign NFT
	function validate_transfer_nft(uint128 action_id, address to, string calldata data) public whenNotPaused returns(uint256) {
		bytes memory action_data = abi.encode(TransferNftAction(to, data));
		ValidationRes res = validate_action(action_id, Action.TransferUnique, action_data);
		if (res == ValidationRes.Execute) {
			nft_token.mint(to, nft_cnt);
			nft_token.setURI(nft_cnt, data);
			nft_cnt += 1;

			return nft_cnt-1;
		}

		return 0;
	}

	// Unfreeze ETH
	function validate_unfreeze(uint128 action_id, address payable to, uint256 value) public whenNotPaused {
		bytes memory action_data = abi.encode(UnfreezeAction(to, value));
		ValidationRes res = validate_action(action_id, Action.Unfreeze, action_data);
		if (res == ValidationRes.Execute) {
			require(to.send(value), "FAILED TO TRANSFER?!");
		}
	}

	function validate_unfreeze_nft(uint128 action_id, address to, uint256 tokenId, IERC721 contract_addr) public whenNotPaused {
		require(nft_whitelist[address(contract_addr)] == 2, "NFT not whitelisted?!");

		bytes memory action_data = abi.encode(UnfreezeNftAction(to, tokenId, address(contract_addr)));
		ValidationRes res = validate_action(action_id, Action.UnfreezeUnique, action_data);
		if (res == ValidationRes.Execute) {
			contract_addr.safeTransferFrom(address(this), to, tokenId);
		}
	}

	function validate_whitelist_nft(uint128 action_id, IERC721 contract_addr) public whenNotPaused {
		require(nft_whitelist[address(contract_addr)] != 2, "NFT already whitelisted");

		bytes memory action_data = abi.encodePacked(address(contract_addr));
		ValidationRes res = validate_action(action_id, Action.WhitelistNft, action_data);
		if (res == ValidationRes.Execute) {
			nft_whitelist[address(contract_addr)] = 2;
		}
	}

	function validate_add_validator(uint128 action_id, address new_validator) public whenNotPaused {
		require(!validators.contains(new_validator), "already a validator");

		bytes memory action_data = abi.encodePacked(new_validator);
		ValidationRes res = validate_action(action_id, Action.AddValidator, action_data);
		if (res == ValidationRes.Execute) {
			validators.add(new_validator);
		}
	}

	function validate_remove_validator(uint128 action_id, address old_validator) public whenNotPaused {
		require(threshold <= validators.length()-1, "update the threshold before removing this validator!");
		require(validators.contains(old_validator), "given address is not a validator");
		require(msg.sender != old_validator, "you can't remove yourself");

		bytes memory action_data = abi.encodePacked(old_validator);
		ValidationRes res = validate_action(action_id, Action.RemoveValidator, action_data);
		if (res == ValidationRes.Execute) {
			validators.remove(old_validator);
		}
	}

	function validate_pause_bridge(uint128 action_id) public whenNotPaused {
		bytes memory action_data = "";

		ValidationRes res = validate_action(action_id, Action.PauseBridge, action_data);
		if (res == ValidationRes.Execute) {
			_pause();
		}
	}

	function validate_unpause_bridge(uint128 action_id) public whenPaused {
		bytes memory action_data = "";

		ValidationRes res = validate_action(action_id, Action.UnpauseBridge, action_data);
		if (res == ValidationRes.Execute) {
			_unpause();
		}
	}

	function validate_set_threshold(uint128 action_id, uint16 new_threshold) public whenNotPaused {
		require(new_threshold <= validators.length(), "validators must be <= validators length");

		bytes memory action_data = abi.encodePacked(new_threshold);
		ValidationRes res = validate_action(action_id, Action.SetThreshold, action_data);
		if (res == ValidationRes.Execute) {
			threshold = new_threshold;
		}
	}

	function _withdraw_fees() private {
		uint validator_cnt = validators.length();

		// This is not perfect but the residual value can't be greater than validator_cnt which should be minimal compared to total fees collected (> 1E18!)
		uint256 per_acc = tx_fees / validator_cnt;
		for (uint i = 0; i < validator_cnt; i++) {
			payable(validators.at(i)).transfer(per_acc);
			tx_fees -= per_acc;
		}
	}

	function validate_withdraw_fees(uint128 action_id) public {
		bytes memory action_data = "";
		ValidationRes res = validate_action(action_id, Action.WithdrawFees, action_data);
		if (res == ValidationRes.Execute) {
			_withdraw_fees();
		}
	}

	function _withdraw(address sender, uint64 chain_nonce, string calldata to, uint256 value) private {
		token.burn(sender, chain_nonce, value);
		emit Unfreeze(action_cnt, chain_nonce, msg.value, to, value);
		action_cnt += 1;
		tx_fees += msg.value;
	}

	// Withdraw Wrapped token
	function withdraw(uint64 chain_nonce, string calldata to, uint256 value) public requireFees whenNotPaused payable {
		_withdraw(msg.sender, chain_nonce, to, value);
	}

	function _withdraw_nft(address sender, string calldata to, uint256 id) private {
		require(nft_token.ownerOf(id) == sender, "You don't own this nft!");

		string memory data = nft_token.tokenURI(id);

		nft_token.setURI(id, "");
		nft_token.burn(id);
		emit UnfreezeNft(action_cnt, msg.value, to, data);
		action_cnt += 1;
		tx_fees += msg.value;
	}

	// Withdraw Foreign NFT
	function withdraw_nft(string calldata to, uint256 id) public requireFees whenNotPaused payable {
		_withdraw_nft(msg.sender, to, id);
	}

	// Freeze erc721 token, requires approval to transfer
	function freeze_erc721(IERC721 erc721_contract, uint256 tokenId, uint64 chain_nonce, string calldata to) public requireFees whenNotPaused payable {
		require(nft_whitelist[address(erc721_contract)] == 2, "This NFT contract is not whitelisted");

		erc721_contract.safeTransferFrom(msg.sender, address(this), tokenId);
	
		emit TransferErc721(action_cnt, chain_nonce, msg.value, to, tokenId, address(erc721_contract));
		action_cnt += 1;
		tx_fees += msg.value;
	}

	// Transfer ETH to to Polka
	function freeze(uint64 chain_nonce, string memory to, uint256 value) public whenNotPaused payable {
		require(msg.value > value, "must pay both value and transaction fees!");

		emit Transfer(action_cnt, chain_nonce, msg.value - value, to, value);
		action_cnt += 1;
		tx_fees += msg.value - value;
	}
}
