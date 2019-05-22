const ProxyFactory = artifacts.require("./ProxyFactory.sol");

module.exports = async function(deployer) {
  await deployer.deploy(ProxyFactory);
};
