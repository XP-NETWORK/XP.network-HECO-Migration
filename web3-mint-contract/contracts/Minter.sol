pragma solidity ^0.8;

import "./XPNft.sol";
import "./XPNet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "solidity-bytes-utils/contracts/BytesLib.sol";

contract Minter is IERC721Receiver {
	using BytesLib for bytes;
	using SafeCast for uint256;

	uint256 private threshold;
	uint256 private action_cnt = 0;
	uint256 private nft_cnt = 0x0;
	XPNft private nft_token;
	XPNet private token;

  mapping (address=>uint8) private validators;
  uint256 public validator_cnt;

	enum ValidationRes {
		Execute,
		Noop
	}

	enum Action {
		Transfer,
		TransferUnique,
		Unfreeze,
		UnfreezeUnique
	}

	struct ActionInfo {
		Action action;
		uint256 validator_cnt;
	}

	// Transfer Wrapped to WEB3
    struct TransferAction {
		uint64 chain_nonce;
        address to;
        uint256 value;
    }

	// transfer Wrapped NFT to Web3
	struct TranferUniqueAction {
		address to;
		string data; // chain info is encoded by the validator here
	}

	// Unfreeze ETH here
	struct UnfreezeAction {
		address to;
		uint256 value;
	}

	event Transfer(uint256 action_id, uint64 chain_nonce, string to, uint256 value); // Transfer ETH to polkadot
	event TransferErc721(uint256 action_id, uint64 chain_nonce, string to, uint256 id, address contract_addr); // Transfer Erc721 to polkadot
	event Unfreeze(uint256 action_id, uint64 chain_nonce, string to, uint256 value); // Unfreeze XPNET on polkadot
	event UnfreezeNft(uint256 action_id, string to, string data); // Unfreeze NFT on polkaot

	mapping (uint128=>ActionInfo) private actions;
	mapping (uint128=>mapping (address=>uint8)) private action_validators;

	constructor(address[] memory _validators, uint16 _threshold, XPNft _nft_token, XPNet _token) {
		require(_validators.length > 0, "Validators must not be empty!");
		require(_threshold > 0 && _threshold <= _validators.length, "invalid threshold!");

		for (uint i = 0; i < _validators.length; i++) {
			validators[_validators[i]] = 2;
		}
		validator_cnt = _validators.length;
		threshold = _threshold;
		nft_token = _nft_token;
		token = _token;
	}

	function validate_action(uint128 action_id, Action action) private returns (ValidationRes) {
		require(validators[msg.sender] == 2, "Not a validator!");

		if (actions[action_id].validator_cnt == 0) {
			actions[action_id] = ActionInfo(action, 1);
		} else {
			require(action_validators[action_id][msg.sender] != 2, "Duplicate Validator!");
			actions[action_id].validator_cnt += 1;
		}

		action_validators[action_id][msg.sender] = 2;

		ValidationRes res = ValidationRes.Noop;
		if (actions[action_id].validator_cnt == threshold) {
			res = ValidationRes.Execute;
		}

		if (actions[action_id].validator_cnt == validator_cnt) {
			delete actions[action_id];
			// TODO: Should we clear action_validators?
		}

		return res;
	}

	// Transfer XPNET
	function validate_transfer(uint128 action_id, uint64 chain_nonce, address to, uint256 value) public {
		ValidationRes res = validate_action(action_id, Action.Transfer);
		if (res == ValidationRes.Execute) {
			token.mint(to, chain_nonce, value);
		}
	}

	// Transfer Foreign NFT
	function validate_transfer_nft(uint128 action_id, address to, string calldata data) public  returns(uint256){
		ValidationRes res = validate_action(action_id, Action.TransferUnique);
		if (res == ValidationRes.Execute) {
			nft_token.mint(to, nft_cnt);
			nft_token.setURI(nft_cnt, data);
			nft_cnt += 1;

			return nft_cnt-1;
		}

		return 0;
	}

	// Unfreeze ETH
	function validate_unfreeze(uint128 action_id, address payable to, uint256 value) public {
		ValidationRes res = validate_action(action_id, Action.Unfreeze);
		if (res == ValidationRes.Execute) {
			require(to.send(value), "FAILED TO TRANSFER?!");
		}
	}

	function validate_unfreeze_nft(uint128 action_id, address to, uint256 tokenId, IERC721 contract_addr) public {
		ValidationRes res = validate_action(action_id, Action.UnfreezeUnique);
		if (res == ValidationRes.Execute) {
			contract_addr.safeTransferFrom(address(this), to, tokenId);
		}
	}


	function _withdraw(address sender, uint64 chain_nonce, string calldata to, uint256 value) private {
		token.burn(sender, chain_nonce, value);
		emit Unfreeze(action_cnt, chain_nonce, to, value);
		action_cnt += 1;
	}

	// Withdraw Wrapped token
	function withdraw(uint64 chain_nonce, string calldata to, uint256 value) public {
		_withdraw(msg.sender, chain_nonce, to, value);
	}

	function _withdraw_nft(address sender, string calldata to, uint256 id) private {
		require(nft_token.ownerOf(id) == sender, "You don't own this nft!");

		string memory data = nft_token.tokenURI(id);

		nft_token.burn(id);
		nft_token.setURI(id, "");
		emit UnfreezeNft(action_cnt, to, data);
		action_cnt += 1;
	}

	// Withdraw Foreign NFT
	function withdraw_nft(string calldata to, uint256 id) public {
		_withdraw_nft(msg.sender, to, id);
	}

	function onERC721Received(
		address caller,
		address,
		uint256 tokenId,
		bytes calldata data
	) public virtual override returns (bytes4) {
		uint64 chain_nonce = data.toUint64(0);
		string memory to = string(data.slice(8, data.length-8));

		emit TransferErc721(action_cnt, chain_nonce, to, tokenId, caller);
		action_cnt += 1;
		return this.onERC721Received.selector;
	}

	// Transfer ETH to to Polka
	function freeze(uint64 chain_nonce, string memory to) public payable {
		require(msg.value > 0, "value must be > 0!");
		emit Transfer(action_cnt, chain_nonce, to, msg.value);
		action_cnt += 1;
	}
}
