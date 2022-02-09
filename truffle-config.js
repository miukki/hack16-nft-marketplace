const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = 'knock shiver excite entire talk donate quick train correct hawk connect pigeon'

  
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
   development: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // Match any network id 
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          'https://rinkeby.infura.io/v3/a943adb014e94a5480f181a890a7c856',//infura provider
        )
      },
      
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      from: '0x99fEDB8bB1A0d4aa63D825a8333B7275A04d5ed8', //0x99fEDB8bB1A0d4aa63D825a8333B7275A04d5ed8 account has 0.1ETH enough to deploy (first account from hd wallet)
    },
        
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
};
