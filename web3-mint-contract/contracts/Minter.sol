pragma solidity ^0.8;

import "./XPNet.sol";

contract Minter {
	uint256 private threshold;
	XPNet private token;

    mapping (address=>uint8) private validators;
    uint256 public validator_cnt;

    struct TransferAction {
        address to;
        uint256 value;
    }

	struct TransferInfo {
		TransferAction action;
		uint256 validator_cnt;
	}

    mapping (uint128=>TransferInfo) private transfers;
	mapping (uint128=>mapping (address=>uint8)) private action_validators;

    constructor(address[] memory _validators, uint16 _threshold, XPNet _token) {
		require(_validators.length > 0);
		require(threshold > 0 && threshold <= _validators.length);

		for (uint i = 0; i < _validators.length; i++) {
			validators[_validators[i]] = 2;
		}
		validator_cnt = _validators.length;
		threshold = _threshold;
		token = _token;
    }

    function validate_transfer(uint128 action_id, address to, uint256 value) public {
        require(validators[msg.sender] == 2);

		if (transfers[action_id].validator_cnt == 0) {
			transfers[action_id] = TransferInfo(
				TransferAction(to, value),
				1
			);
			action_validators[action_id][msg.sender] = 2;
		} else {
			require(action_validators[action_id][msg.sender] != 2);
			transfers[action_id].validator_cnt += 1;
			action_validators[action_id][msg.sender] = 2;
		}

		if (transfers[action_id].validator_cnt == threshold) {
			token.mint(to, value);
		}

		if (transfers[action_id].validator_cnt == validator_cnt) {
			delete transfers[action_id];
			// TODO: Should we clear action_validators?
		}
    }
}
