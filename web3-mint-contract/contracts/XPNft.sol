pragma solidity ^0.8; 

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract XPNft is ERC721URIStorage, Ownable {
	constructor() ERC721("XpWrapNft", "XPNFT") {}

	function mint(address to, uint256 id) public onlyOwner {
		_safeMint(to, id);
  }

	function burn(uint256 id) public onlyOwner {
		_burn(id);
	}

	function setURI(uint256 id, string calldata uri_) public onlyOwner {
		_setTokenURI(id, uri_);
	}
}
