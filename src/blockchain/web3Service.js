import Web3 from 'web3';

class Web3Service {
  constructor(endpoint) {
    this.web3 = new Web3(endpoint);
  }

  async getBalance(account) {
    try {
      const balance = await this.web3.eth.getBalance(account);
      const balanceToEth = await this.web3.utils.fromWei(balance, 'ether');
      console.log('Balance: ', balance);

      return balanceToEth;
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  async sendTrx(fromAccount, toAccount, amount) {
    try {
      const trx = await this.web3.eth.sendTransaction({
        from: fromAccount,
        to: toAccount,
        value: this.web3.utils.toWei(amount, 'ether'),
      });
      console.log('Succesfully sent ETH: ', amount);

      return { success: true };
    } catch (err) {
      console.log('Error: ', err);
    }
  }
  // async getBlock(blockNumber) {
  //   try {
  //     const block = await this.web3.eth.getBlock(blockNumber);
  //     if (block === undefined) {
  //       console.log('Block not found');
  //       return [];
  //     }

  //     const transactions = block.transactions;
  //     console.log(blockNumber);
  //     if (transactions === 0) {
  //       console.log('No transactions found in block', blockNumber);
  //       return [];
  //     }

  //     const transactionList = [];
  //     for (let hash of transactions) {
  //       const trx = await this.web3.eth.getTransaction(hash);
  //       transactionList.push(trx);
  //     }
  //     return transactionList;
  //   } catch (err) {
  //     console.log('Error: ', err);
  //   }
  // }

  async getAllBlocks() {
    try {
      const latestBlock = await this.web3.eth.getBlock('latest');
      // if not exist it undefined

      if (!latestBlock) {
        console.log('LAtest block not found ');
        return [];
      }
      const latestBlockNumber = latestBlock.number;
      const blocks = [];

      for (
        let blockNumber = 0;
        blockNumber <= latestBlockNumber;
        blockNumber++
      ) {
        const block = await this.web3.eth.getBlock(blockNumber);
        if (block) {
          blocks.push(block);
        }
      }

      return blocks;

      // const latestBlockNr = await this.web3.eth.getBlockNumber();
      // const blocks = [];

      // for (let blockNr = 0; blockNr <= latestBlockNr; blockNr++) {
      //   const block = await this.getBlock(blockNr);
      //   if (block) {
      //     blocks.push(block);
      //   }
      // }
      // return blocks;
    } catch (err) {
      console.log('Error: ', err);
      return [];
    }
  }

  async getBlockCount() {
    try {
      const blockCount = await this.web3.eth.getBlockNumber();
      return blockCount;
    } catch (err) {
      console.log('Error: ', err);
    }
  }
}

export default Web3Service;
// // LATEST block and should it return block?
// export async function getBlock() {
//   try {
//     const block = await web3.eth.getBlock('latest');
//     if (block === undefined) return;

//     const transactions = block.transactions;
//     if (transactions !== null) getTrxHistory(transactions);

//     return block;
//   } catch (err) {
//     console.log('Error: ', err);
//   }
// }
// // add try catch
// export async function getTrxHistory(transactions) {
//   if (transactions > 0) {
//     for (let hash of transactions) {
//       let trx = await web3.eth.getTransaction(hash);
//       return trx;
//     }
//   }
// }

// export async function func() {
//   try {
//   } catch (err) {
//     console.log('Error: ', err);
//   }
// }
