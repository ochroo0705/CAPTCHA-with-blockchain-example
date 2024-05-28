const Captcha = artifacts.require("Captcha");

module.exports = async function(callback) {
  const captchaInstance = await Captcha.deployed();
  console.log("Generating CAPTCHA...");
  await captchaInstance.generateCaptcha("ExampleCAPTCHA");
  console.log("CAPTCHA generated:", (await captchaInstance.captchaText()));

  console.log("Validating CAPTCHA...");
  await captchaInstance.validateCaptcha("ExampleCAPTCHA");
  console.log("CAPTCHA validated:", (await captchaInstance.isValid()));
  
  callback();
};
