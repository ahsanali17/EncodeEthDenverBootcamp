// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract VolcanoNFTV2 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    
    constructor() ERC721("VolcanoNFTV2", "VC") {}

    string uri = ''; 

    function changeTokenURI(string memory metadata) public onlyOwner returns(string memory){
        uri = metadata;
        return uri;
    }

    function mintNFT() public payable {
        require(msg.value >= 10000000000000000, "Not enough ETH sent; check the price!");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _safeMint(msg.sender, tokenId);
        
        uint256 newItemId = _tokenIdCounter.current();
        string memory tokenURI = uri;
        _setTokenURI(newItemId, tokenURI);
    }

    function withdraw() public onlyOwner{
        // get the amount of Ether stored in this contract
        uint amount = address(this).balance;

        address _Owner = owner();
        // send all Ether to owner
        // Owner can receive Ether since the address of owner is payable
        (bool success, ) = _Owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }
}