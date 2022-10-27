// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

// Homework 7
contract VolcanoCoin is Ownable {

    struct Payment {
        uint256 transferAmount;
        address fromAddress;
        address toRecipient;
    }

    uint256 public totalSupply = 10000;
    
    mapping(address => uint) public balances;
    mapping(address => Payment) internal paymentList;
    event totalSupplyChanged(uint256 totalSupplyWasChanged);
    event transferOccurred(uint256 amountTransferred, address recipient);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function returnTotalSupply() public view returns(uint256){
        return totalSupply;
    }
    
    function changeTotalSupply() public onlyOwner {
        totalSupply += 1000; 
        emit totalSupplyChanged(totalSupply);
    }

    function transfer(uint amount, address toRecipient) public {
        require(msg.sender.balance >= amount);
        balances[msg.sender] -= amount;
        balances[toRecipient] += amount; 
        recordPayment(msg.sender, toRecipient, amount);
        emit transferOccurred(amount, toRecipient);
    }

    function viewPaymentRecords(address user) public view returns(uint, address) {
        return (paymentList[user].transferAmount, paymentList[user].toRecipient);
    }

    function recordPayment(address sender, address reciever, uint amount) public {
        paymentList[sender] = Payment(amount, sender, reciever);
    }
    
}