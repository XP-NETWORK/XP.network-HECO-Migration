pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XPNet is ERC20, Ownable {
    constructor() ERC20("XPNet", "XPN") {
        _mint(msg.sender, 1 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

	function burn(address from, uint256 amount) public onlyOwner {
		_burn(from, amount);
	}
}
