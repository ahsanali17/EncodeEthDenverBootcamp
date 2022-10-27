// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WeightTrackerMinimalProxyFactory is Ownable {
    
    address public implementationContract;

    address[] public allClones;

    event NewClone(address _clone);

    constructor(address _implementation) {
        implementationContract = _implementation;
    }

    function createNewWeightTrackerContract(address _contractOwner) payable external returns(address instance) {
        instance = Clones.clone(implementationContract);
        (bool success, ) = instance.call{value:msg.value}
        (abi.encodeWithSignature("initialize(address)", _contractOwner));

        require(success);
        allClones.push(instance);
        emit NewClone(instance);
        return instance; 
    }
}