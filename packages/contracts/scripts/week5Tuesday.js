require('dotenv').config();
const ethers = require('ethers');

const GOERLI_URL = process.env.ALCHEMY_GOERLI_HTTP;

const connectWSS = async () => {
 console.log(`[${(new Date).toLocaleTimeString()}] Connecting via WebSocket...`);
 const provider = await new ethers.providers.Web3Provider(GOERLI_URL);
 let network = provider.getNetwork()
 network.then(res => console.log(`[${(new Date).toLocaleTimeString()}] Connected to chain ID ${res.chainId}`));

 await listenPendingTx;
} 
const listenPendingTx = (connect, answers, callback) => {
 let i = 0;
 provider.on("pending", (txHash) => {
  if(txHash) {
   process.stdout.write(`[${(new Date).toLocaleTimeString()}] Scanning Transactions: ${txHash} \r`);
  }
 })
 
}

connectWSS()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 })