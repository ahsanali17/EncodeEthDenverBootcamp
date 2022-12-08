require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox")
require("@nomicfoundation/hardhat-chai-matchers");
require("hardhat-gas-reporter");

const GOERLI_URL = process.env.ALCHEMY_GOERLI_HTTP;
const METAMASK_KEY = process.env.METAMASK_GOERLI_PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY;



task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.8.0",
      },
    ]
  },
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
  },
  gasReporter: {
    currency: "USD",
  },
  hardhat: {
    forking: {
      url: GOERLI_URL
    }
  }
};
