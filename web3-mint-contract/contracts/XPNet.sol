pragma solidity ^0.8; 

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract XPNet is ERC1155, Ownable {
	mapping (uint256=>string) uris;

	constructor() ERC1155("XPWRP") {}

	function mint(address to, uint256 id, uint256 amount) public onlyOwner {
		_mint(to, id, amount, "");
	}

	function burn(address from, uint256 id, uint256 amount) public onlyOwner {
		_burn(from, id, amount);
	}
}
