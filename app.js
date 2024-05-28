
// deploy hiisen contractiinha address-g hadgalna
const contractAddress = '0x13fA939D02198FD2E5A0Eb441a0c113bb351b86D';
const contractABI = [
    // contract ABI oruulah
    {
        "constant": false,
        "inputs": [
            {
                "name": "text",
                "type": "string"
            }
        ],
        "name": "generateCaptcha",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "response",
                "type": "string"
            }
        ],
        "name": "validateCaptcha",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "captchaText",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "userResponse",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isValid",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "captchaText",
                "type": "string"
            }
        ],
        "name": "CaptchaGenerated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "isValid",
                "type": "bool"
            }
        ],
        "name": "CaptchaValidated",
        "type": "event"
    }
];

window.addEventListener('load', async () => {
    // Ganache holbogdoh
    const ganacheUrl = 'http://localhost:7545'; // Ganache iin port
    window.web3 = new Web3(ganacheUrl);

    // contract unshih
    const captchaContract = new web3.eth.Contract(contractABI, contractAddress);
    const captchaTextElement = document.getElementById('captchaText');

    // CAPTCHA haruulah
    const captchaText = await captchaContract.methods.captchaText().call();
    captchaTextElement.textContent = `CAPTCHA: ${captchaText}`;
});

async function validateCaptcha() {
    const captchaInput = document.getElementById('captchaInput').value;
    const captchaContract = new web3.eth.Contract(contractABI, contractAddress);
    const captchaText = await captchaContract.methods.captchaText().call();

    // CAPTCHA shalgah
    captchaContract.methods.validateCaptcha(captchaInput).send({ from: '0x49d0904Cc41550bC27Caf2DF9D2762e5be114c0f' })
    .on('receipt', function(receipt){
        // aldaagui bol text zov esehiig shalgah
        if (receipt.events.CaptchaValidated.returnValues.isValid) {
            displayMessage('success', 'Successfully validated');
        } else {
            displayMessage('error', 'CAPTCHA incorrect');
        }
    })
    .on('error', function(error){
        // Aldaa garsan bol
        console.error('Error validating CAPTCHA:', error);
        displayMessage('error', error.message);
    });
}

function displayMessage(type, message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message;
    messageContainer.className = type;
}
