// import {ethers} from 'ethers';
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import {VolcanoCoinAddress} from "../addresses/addresses";
import VolcanoCoinV2 from '../abis/VolcanoCoinV2.json';

const contractAbi = VolcanoCoinV2.abi;

const alchemy_url = process.env.NEXT_PUBLIC_ALCHEMY_GOERLI_HTTP;

const web3 = createAlchemyWeb3(alchemy_url);

export const volcanoContract = new web3.eth.Contract(contractAbi, VolcanoCoinAddress);

export const transferred = async ({amount,toRecipient}) => {
 const sentTo = await volcanoContract.methods.transfer(amount,toRecipient).call();
 return sentTo;
}

export const connectWallet = async () => {
 if(window.ethereum) {
  try {
   const addressArray = await window.ethereum.request({
    method:"eth_requestAccounts",
   });
   const obj = {
    address: addressArray[0],
   };
   console.log("connected", obj)
   return obj;
  } catch (error) {
   return {
    address: "",
    status: error.message,
   };
  }
 } else {
  return {
   address: "",
   status: (
    <span>
     <p>
      <a target="_blank" href={`https://metamask.io/download.html`}>
       You must install Metamask, a virtual Ethereum wallet, in your browser.       
      </a>
     </p>
    </span>
   )
  }
 }
}

export const getCurrentWalletConnected = async () => {
 if (window.ethereum) {
   try {
     const addressArray = await window.ethereum.request({
       method: "eth_accounts",
     });
     if (addressArray.length > 0) {
       return {
         address: addressArray[0],
         status: "👆🏽 Write a message in the text-field above.",
       };
     } else {
       return {
         address: "",
         status: "🦊 Connect to Metamask using the top right button.",
       };
     }
   } catch (err) {
     return {
       address: "",
       status: "😥 " + err.message,
     };
   }
 } else {
   return {
     address: "",
     status: (
       <span>
         <p>
           {" "}
           🦊{" "}
           <a target="_blank" href={`https://metamask.io/download.html`}>
             You must install Metamask, a virtual Ethereum wallet, in your
             browser.
           </a>
         </p>
       </span>
     ),
   };
 }
};
// const alchemy_key = process.env.NEXT_PUBLIC_ALCHEMY_GOERLI_KEY;
// const metamask_key = process.env.METAMASK_GOERLI_PRIVATE_KEY;

// const provider = await ethers.providers.AlchemyProvider("goerli",alchemy_key);
// const signer = new ethers.Wallet(metamask_key)

// // Global Contract Variable
// const VolcanoContract = new ethers.Contract(VolcanoCoinAddress,VolcanoCoinV2.abi, signer);
//  console.log("VolcanoContract:", VolcanoContract );
// // Smart Contract Methods

// export const transferred = async ({amount, toRecipient}) => {
//  await VolcanoContract.methods.transfer().encodeABI();
//  eventListener();
// }




