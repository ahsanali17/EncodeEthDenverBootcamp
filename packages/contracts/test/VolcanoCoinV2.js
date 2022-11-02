const {ethers} = require("hardhat");
const { expect } = require("chai");
const assert = require('assert');

describe("VolcanoCoinV2", function() {
 let volcanoCoinV2;

 beforeEach (async () => {
  const VolcanoCoinV2 = await ethers.getContractFactory("VolcanoCoinV2");
  const volcanocoinV2 = await VolcanoCoinV2.deploy();
  volcanoCoinV2 = volcanocoinV2;
 })
 describe("VolcanoCoinV2", function () {
  it("lets only the owner change the supply", async function () {
  
   const [owner] = await ethers.getSigners(); 
   await expect(volcanoCoinV2.connect(owner).changeTotalSupply()).to.not.be.reverted;
  })
  
  it("it will return the current total supply", async function () {
   const [addr1] = await ethers.getSigners();
   await expect(volcanoCoinV2.connect(addr1).returnTotalSupply()).to.not.be.reverted;
  })
  
  it("will check to ensure the total supply is initially 10,000", async function () {
   const totalSupply = await volcanoCoinV2.totalSupply();
   
   const initialSupply = 10000;
   
   assert.equal(totalSupply.toString(), initialSupply);
   
  })
 })
})