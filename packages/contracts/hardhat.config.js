require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-chai-matchers");

const GOERLI_URL = process.env.ALCHEMY_GOERLI_HTTP;
const METAMASK_KEY = process.env.METAMASK_GOERLI_PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [METAMASK_KEY],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  }
};
