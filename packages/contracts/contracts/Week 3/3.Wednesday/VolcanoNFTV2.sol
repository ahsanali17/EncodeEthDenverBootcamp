// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract VolcanoNFTV2 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    
    constructor() ERC721("VolcanoNFTV2", "VC") {}
  
      function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        _tokenIdCounter.increment();

        uint256 newItemId = _tokenIdCounter.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
    
}