// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract UserNftMinter is ERC721URIStorage {
    constructor() ERC721("UserNftMinter", "UMT") {}

    function mint(uint256 id, string calldata uri) public {
        _safeMint(msg.sender, id);
        _setTokenURI(id, uri);
    }

    function burn(uint256 id) public {
        address owner = ownerOf(id);
        require(owner == msg.sender, "You are not the owner of this token");
        _burn(id);
    }
}
