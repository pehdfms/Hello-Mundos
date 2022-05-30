/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers")

const { PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://polygon-rpc.com",
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: [`0x${POLYGONSCAN_API_KEY}`]
  },
  solidity: {
    version: "^0.8.0",
    compilers: [{version: "0.8.14"}],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
