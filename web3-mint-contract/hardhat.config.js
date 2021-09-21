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
    avalanche: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.SIGNER],
    },
    cronos: {
      url: "https://cronos-testnet.crypto.org:8545",
      accounts: [process.env.SIGNER],
    },
    ethclassic: {
      url: "https://www.ethercluster.com/mordor",
      accounts: [process.env.SIGNER],
    },
    celo: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.SIGNER],
    },
    vechain: {
        url: "https://testing-bridge.xp.network/vechain/",
        accounts: [process.env.SIGNER]
    },
    harmony: {
      url: "https://api.s0.b.hmny.io",
      accounts: [process.env.SIGNER],
    }
  },
};
