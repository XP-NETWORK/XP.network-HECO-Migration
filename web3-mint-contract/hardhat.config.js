/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 4000
      }
    },
	heco_testnet: {
	  url: "https://http-testnet.hecochain.com",
	  accounts: [process.env.SIGNER]
	},
	bsc: {
		url: "https://data-seed-prebsc-1-s1.binance.org:8545",
		accounts: [process.env.SIGNER]
	}
  }
};
