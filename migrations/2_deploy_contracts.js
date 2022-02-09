var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var MetaData = artifacts.require("./MetaData.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(MetaData);
};
