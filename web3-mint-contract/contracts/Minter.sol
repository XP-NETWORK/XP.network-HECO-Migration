pragma solidity ^0.8;

import "./XPNet.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract Minter {
	uint256 private threshold;
	uint256 private action_cnt = 0;
	uint256 private nft_cnt = 1;
	XPNet private token;

    mapping (address=>uint8) private validators;
    uint256 public validator_cnt;
	uint256 public wrap_token_id = 0;

	enum ValidationRes {
		Execute,
		Noop
	}

	enum Action {
		Transfer,
		TransferUnique,
		Unfreeze
	}

	struct ActionInfo {
		Action action;
		uint256 validator_cnt;
	}

	// Transfer XPNET to WEB3
    struct TransferAction {
        address to;
        uint256 value;
    }

	// transfer polkadot NFT to Web3
	struct TranferUniqueAction {
		address to;
		string data;
	}

	// Unfreeze ETH here
	struct UnfreezeAction {
		address to;
		uint256 value;
	}

	event Transfer(uint256 action_id, string to, uint256 value); // Transfer ETH to polkadot
	event TransferErc721(uint256 action_id, string to, string data); // Transfer Erc721 to polkadot
	event TransferErc1155(uint256 action_id, string to, uint256 id, address contract_addr); // Transfer Erc1155 to polkadot
	event Unfreeze(uint256 action_id, string to, uint256 value); // Unfreeze XPNET on polkadot
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
    function validate_transfer(uint128 action_id, address to, uint256 value) public {
		ValidationRes res = validate_action(action_id, Action.Transfer);
		if (res == ValidationRes.Execute) {
			token.mint(to, wrap_token_id, value);
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

	// Withdraw XPNET
	function withdraw(string memory to, uint256 value) public {
		token.burn(msg.sender, wrap_token_id, value);
		emit Unfreeze(action_cnt, to, value);
		action_cnt += 1;
	}

	// Withdraw Foreign NFT
	function withdraw_nft(string calldata to, uint256 id) public {
		string memory data = token.uri(id);

		token.burn(msg.sender, id, 1);
		token.setURI(id, "");
		emit UnfreezeNft(action_cnt, to, data);
	}

	// Transfer ETH to to Polka
	function freeze(string memory to) public payable {
		require(msg.value > 0, "value must be > 0!");
		emit Transfer(action_cnt, to, msg.value);
		action_cnt += 1;
	}
}
