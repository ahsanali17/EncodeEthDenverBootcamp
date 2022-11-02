const {ethers} = require("hardhat");

async function main() {
  
  const VolcanoNFT = await ethers.getContractFactory("VolcanoNFTV2");
  const volcanoNFT = await VolcanoNFT.deploy();
  
  const result = await volcanoNFT.deployed();
  
  console.log("deployed address...", result.address);
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
