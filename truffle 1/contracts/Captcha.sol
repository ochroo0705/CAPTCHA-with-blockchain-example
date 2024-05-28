// SPDX-License-Identifier: UNKNOWN 

pragma solidity >=0.4.25 <0.9.0;

contract Captcha {
    string public captchaText;
    string public userResponse;
    bool public isValid;

    event CaptchaGenerated(string captchaText);
    event CaptchaValidated(bool isValid);

    constructor() {
    }

    function generateCaptcha(string memory text) public {
        captchaText = text;
        emit CaptchaGenerated(text);
    }

    function validateCaptcha(string memory response) public {
        require(bytes(captchaText).length > 0, "Captcha not generated");
        userResponse = response;
        // shalgah uildel. jisheegeer hash utgaar shalgasan
        isValid = (keccak256(abi.encodePacked(response)) == keccak256(abi.encodePacked(captchaText)));
        emit CaptchaValidated(isValid);
    }
}
