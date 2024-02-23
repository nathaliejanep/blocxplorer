import { formatTimestamp } from '../utils/helpers.js';
import createDiv from './createDiv.js';

const createBlockList = (blocks) => {
  const blockListContainer = createDiv();
  const blockList = document.createElement('ul');

  blocks.forEach((block) => {
    const blockItem = document.createElement('li');

    const number = document.createElement('strong');
    number.textContent = `Block Number: ${block.number}`;

    const timestamp = document.createElement('span');
    timestamp.textContent = `Timestamp: ${formatTimestamp(block.timestamp)}`;

    const transactions = document.createElement('span');
    const blockTrxLength = block.transactions ? block.transactions.length : 0;
    transactions.textContent = `Number of Transactions: ${blockTrxLength}`;

    const miner = document.createElement('span');
    miner.textContent = `Miner: ${block.miner}`;

    blockItem.append(number, timestamp, transactions, miner);
    blockList.appendChild(blockItem);
  });

  blockListContainer.appendChild(blockList);
  return blockListContainer;
};

export default createBlockList;
