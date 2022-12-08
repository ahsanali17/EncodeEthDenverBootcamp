require('dotenv').config();
const ethers = require('ethers');
const contract = require("../artifacts/contracts/Week 3/3.Wednesday/VolcanoNFTV2.sol/VolcanoNFTV2.json")

const ALCHEMY_API_KEY = process.env.ALCHEMY_GOERLI_KEY;
const METAMASK_KEY = process.env.METAMASK_GOERLI_PRIVATE_KEY;


const provider = new ethers.providers.AlchemyProvider('goerli', ALCHEMY_API_KEY);

const signer = new ethers.Wallet(METAMASK_KEY, provider);

const abi = contract.abi;
const address = '0x2EB049E446FEd0E9784532cD607a4D9767631fAD';

const volcanoNFTV2Contract = new ethers.Contract(address, abi, signer);

const tokenURI = "https://gateway.pinata.cloud/ipfs/QmUT5wLsx8bBWqRc6AKZfd2bUkin1pefhRPY43xv2LBSQz";

const mintNFT = async () => {
 let nftTXn = await volcanoNFTV2Contract.mintNFT(signer.address, tokenURI);
 await nftTXn.wait();
 
 console.log(`NFT successfully minted!, check it out at https://goerli.etherscan.io/tx/${nftTXn.hash}`);
}

mintNFT()
.then(() => process.exit(0))
.catch((error) => {
 console.log(error)
 process.exit(1);
})
