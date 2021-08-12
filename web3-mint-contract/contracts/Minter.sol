pragma solidity ^0.8;

import "./XPNet.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";
import "solidity-bytes-utils/contracts/BytesLib.sol";

contract Minter is ERC1155Receiver, IERC721Receiver {
	using BytesLib for bytes;
	using SafeCast for uint256;

	uint256 private threshold;
	uint256 private action_cnt = 0;
	uint256 private nft_cnt = 0x10000; // reserve 0 - 0xffff for chain liquidity
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
	event TransferErc1155(uint256 action_id, uint64 chain_nonce, string to, uint256 id, address contract_addr); // Transfer Erc1155 to polkadot
	event Unfreeze(uint256 action_id, uint64 chain_nonce, string to, uint256 value); // Unfreeze XPNET on polkadot
	event UnfreezeNft(uint256 action_id, string to, string data); // Unfreeze NFT on polkaot

    mapping (uint128=>ActionInfo) private actions;
	mapping (uint128=>mapping (address=>uint8)) private action_validators;

    constructor(address[] memory _validators, uint16 _threshold, XPNet _token) {
		require(_validators.length > 0, "Validators must not be empty!");
		require(_threshold > 0 && _threshold <= _validators.length, "invalid threshold!");

		for (uint i = 0; i < _validators.length; i++) {
			validators[_validators[i]] = 2;
		}
		validator_cnt = _validators.length;
		threshold = _threshold;
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
	function validate_transfer_nft(uint128 action_id, address to, string calldata data) public {
		ValidationRes res = validate_action(action_id, Action.TransferUnique);
		if (res == ValidationRes.Execute) {
			token.mint(to, nft_cnt, 1);
			nft_cnt += 1;
			token.setURI(nft_cnt, data);
		}
	}

	// Unfreeze ETH
	function validate_unfreeze(uint128 action_id, address payable to, uint256 value) public {
		ValidationRes res = validate_action(action_id, Action.Unfreeze);
		if (res == ValidationRes.Execute) {
			require(to.send(value), "FAILED TO TRANSFER?!");
		}
	}

	function validate_unfreeze_erc1155(uint128 action_id, address to, uint256 tokenId, IERC1155 contract_addr) public {
		ValidationRes res = validate_action(action_id, Action.UnfreezeUnique);
		if (res == ValidationRes.Execute) {
			contract_addr.safeTransferFrom(address(this), to, tokenId, 1, "");
		}
	}

	function validate_unfreeze_erc721(uint128 action_id, address to, uint256 tokenId, IERC721 contract_addr) public {
		ValidationRes res = validate_action(action_id, Action.UnfreezeUnique);
		if (res == ValidationRes.Execute) {
			contract_addr.safeTransferFrom(address(this), to, tokenId);
		}
	}


	function _withdraw(address sender, uint64 chain_nonce, string calldata to, uint256 value) private {
		require(chain_nonce < 0x1000, "Not a Fungible token!");

		token.burn(sender, chain_nonce, value);
		emit Unfreeze(action_cnt, chain_nonce, to, value);
		action_cnt += 1;
	}

	// Withdraw Wrapped token
	function withdraw(uint64 chain_nonce, string calldata to, uint256 value) public {
		_withdraw(msg.sender, chain_nonce, to, value);
	}

	function _withdraw_nft(address sender, string calldata to, uint256 id) private {
		string memory data = token.uri(id);

		token.burn(sender, id, 1);
		token.setURI(id, "");
		emit UnfreezeNft(action_cnt, to, data);
		action_cnt += 1;
	}

	// Withdraw Foreign NFT
	function withdraw_nft(string calldata to, uint256 id) public {
		_withdraw_nft(msg.sender, to, id);
	}

	function onERC1155Received(
		address caller,
		address,
		uint256 id,
		uint256 value,
		bytes calldata data
	) external override returns (bytes4) {
		if (caller == address(token)) {
			if (id < 0x1000) {
				_withdraw(address(this), id.toUint64(), string(data), value);
			} else {
				_withdraw_nft(address(this), string(data), id);
			}
		} else {

			require(value == 1, "SFT/FTs not supported!");

			uint64 chain_nonce = data.toUint64(0);
			string memory to = string(data.slice(8, data.length-8));

			emit TransferErc1155(action_cnt, chain_nonce, to, id, caller);
			action_cnt += 1;
		}

		return this.onERC1155Received.selector;
	}

	function onERC1155BatchReceived(
		address,
		address,
		uint256[] calldata,
		uint256[] calldata,
		bytes calldata
	) external override pure returns (bytes4) {
		// TODO: impl
		require(false, "Method not supported!");
		// unreachable
		return this.onERC1155BatchReceived.selector;
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
