/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 4000,
      },
    },
    heco_testnet: {
      url: "https://http-testnet.hecochain.com",
      accounts: [process.env.SIGNER],
    },
    bsc: {
      url: "https://data-seed-prebsc-2-s1.binance.org:8545",
      accounts: [process.env.SIGNER],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/182b3d3fb2d14d5fbe7421348624d1ce",
      accounts: [process.env.SIGNER],
    },
    polygon: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      accounts: [process.env.SIGNER],
    },
    fantom: {
      url: "https://rpc.testnet.fantom.network/",
      accounts: [process.env.SIGNER],
    },
  },
};
