
const Captcha = artifacts.require("Captcha");

module.exports = function(deployer) {
  deployer.deploy(Captcha);
};
