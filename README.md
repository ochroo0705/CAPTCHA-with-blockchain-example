# Кибер аюулгүй байдал: CAPTCHA -г blockchain ашиглан сайжруулах


## Төслийн бүтэц

- `contracts/Captcha.sol`: CAPTCHA-ийн үйлдлийг Solidity smart contract ашиглан үүсгэсэн.
- `migrations/2_deploy_contracts.js`: Truffle ашиглан гэрээг deploy хийх Migration script.
- `app.js`: Web3js ашиглан ухаалаг гүйлгээтэй харилцах Frontend JavaScript.
- `index.html`: CAPTCHA үүсгэн шалгах interface.
- `truffle-config.js`: Truffle-н Ganache-тай холбогдох тохиргооны файл.

## Хэрэгтэй зүйлс

- Node.js ба npm
- Truffle
- Ganache

## Суулгах

1. **Repository-г clone хийх**
    ```sh
    git clone https://github.com/username/captcha-verification.git
    cd captcha-verification
    ```

2. **Хэрэгтэй Dependencies суулгах**
    ```sh
    npm install
    ```

3. **Ganache эхлүүлэх**
    - Татаж суулгах: [Ganache](https://www.trufflesuite.com/ganache).
    - Ganache эхлүүлж дараах port дээр эхлүүлэх `http://localhost:7545`.

4. **Ухаалаг гэрээг Compile, Deploy хийх**
    ```sh
    truffle compile
    truffle migrate --reset
    ```

## Төслийг ажиллуулах

1. **Локал Веб сервер эхлүүлэх**
    - index.html дээр "Open with Live Server"
    - Энэ нь ихэвчлэн `http://localhost:3000`-д эхлүүлнэ.

2. **Вэб хөтөчид `index.html`**
    - Хөтөчөө нээгээд `http://localhost:3000`-руу очих.

