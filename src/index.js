import Web3Service from './blockchain/web3Service.js';
import createBlockList from './ui/createBlockList.js';
import createBtn from './ui/createBtn.js';
import createDiv from './ui/createDiv.js';
import { createInput } from './ui/createInput.js';

const root = document.querySelector('#root');

// TODO: Hide API_KEY & change to sepolia testnet
// https://sepolia.infura.io/v3/e6477e433ae94d058bfce44232f09f68
const web3Service = new Web3Service('HTTP://127.0.0.1:7545');

const container = createDiv('container');
// ---------- BALANCE ---------- //
const balanceContainer = createDiv('container-inputs');
const addressInput = createInput('text', 'Enter account...');
const checkBalanceBtn = createBtn('Check Balance');

// ---------- TRANSFER ---------- //
const transferContainer = createDiv('container-inputs');
const sendToAddress = createInput('text', 'Send To Address...');
const sendFromAddress = createInput('text', 'Send From Address...');
const amountToSend = createInput('number', 'Amount To Send...');
const transferBtn = createBtn('Transfer');

// ---------- BLOCKS ---------- //
const blockCount = await web3Service.getBlockCount();
const blocks = await web3Service.getAllBlocks();
console.log(blocks);

const blockList = createBlockList(blocks);

// ---------- APPEND ---------- //
balanceContainer.append(addressInput, checkBalanceBtn);
transferContainer.append(
  sendFromAddress,
  sendToAddress,
  amountToSend,
  transferBtn
);

container.append(balanceContainer, transferContainer, blockList);
root.appendChild(container);

checkBalanceBtn.addEventListener('click', async () => {
  const balance = await web3Service.getBalance(addressInput.value);
  console.log(balance);
});

transferBtn.addEventListener('click', async () => {
  const trx = await web3Service.sendTrx(
    sendToAddress.value,
    sendFromAddress.value,
    Number(amountToSend.value)
  );
  if (trx.success) {
    console.log('Success');
  }
});
