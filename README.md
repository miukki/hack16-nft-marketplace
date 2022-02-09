# hack16-blockbusters-nft-poc

## Docs

https://www.trufflesuite.com/boxes/react

Contract ERC1155 for OpenSea:
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol

Contract validator:
https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js

Metadata format:
https://docs.opensea.io/docs/metadata-standards

eip-1155#metadata:
https://eips.ethereum.org/EIPS/eip-1155#metadata

```
#ID MUST be leading zero padded to 64 hex characters length if necessary.
$ node test.js 314592
{
  h: '000000000000000000000000000000000000000000000000000000000004cce0',
  num: '314592',
  length: 64
}

```

# metadata-static-app

```
#deploy static assets
npm install -g moralis-admin-cli
cd metadata-static-app
moralis-admin-cli  deploy

#Specify Moralis Api Key: TiQCgJUWZKDCtRd
#Specify Moralis Api Secret: xHQfHYFPWUYPmWq

#access to assets
https://ttzsznn3ubho.usemoralis.com
https://ttzsznn3ubho.usemoralis.com/0000000000000000000000000000000000000000000000000000000000000001.json

usemoralis.com documenation
```

# Run local dev server

```

```

# Metamask Rinkeby wallet with Eth

```
#mnemonic phrase
knock shiver excite entire talk donate quick train correct hawk connect pigeon
#account i use 0x99fEDB8bB1A0d4aa63D825a8333B7275A04d5ed8 to deploy smart contract
```

# Contract MetaData address

```
#source
https://rinkeby.etherscan.io/address/0x375d57967de7d72f5d5cd05898b39257fa18d748

   Deploying 'MetaData'
   --------------------
   > transaction hash:    0x009222b3d3a5987a86e17bebbbe84d00eb4a8e96144e30da743beb2a509c11ae
   > Blocks: 1            Seconds: 9
   > contract address:    0x375D57967DE7D72f5d5cd05898B39257Fa18D748
   > block number:        9657631
   > block timestamp:     1637147243
   > account:             0x99fEDB8bB1A0d4aa63D825a8333B7275A04d5ed8
   > balance:             0.981789649635051035
   > gas used:            1629752 (0x18de38)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01629752 ETH

```

# Contract NFT address

#deployed
https://rinkeby.etherscan.io/address/0x0968dac33e4a0e690bf1f0fefe47728acdd56985 

# deployed contract transaction hash in rinkeby

0x1a8f7afa38b5144ab642748de8ee4fa28d76dac38c9bf8abc7ed06de05a629d8

# Deploy to OpenSea test Contract

Source: https://opensea.io/get-listed
```
#test deploy
https://testnets.opensea.io/collection/unidentified-contract-oewnpbxq6x
```

# Run local chain

```
npm install -g ganache-cli
ganache-cli --port 7545

```

# Suggested node version

```
nvm use v14.17.0
```

