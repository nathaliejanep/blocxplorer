import Web3Service from '../src/blockchain/web3Service.js'; // Adjust the import path based on your project structure

// Test for the Web3Service class
describe('Web3Service', () => {
  // Test case for the getBalance method
  describe('getBalance', () => {
    it('should return balance in ether for a given account', async () => {
      const web3Service = new Web3Service('HTTP://127.0.0.1:7545');
      const balance = await web3Service.getBalance(
        '0x800a9c5a4d913054730d709f6895ADC8EB06843c'
      );
      expect(typeof balance).toBe('string'); // Check if balance is returned as a string
      expect(parseFloat(balance)).toBeGreaterThanOrEqual(0); // Check if balance is a non-negative number
    });
  });

  //   Test case for the sendTrx method
  // TODO fix thos test
//   describe('sendTrx', () => {
//     it('should send a transaction successfully', async () => {
//       const web3Service = new Web3Service('HTTP://127.0.0.1:7545');
//       const result = await web3Service.sendTrx(
//         '0x68Db9794F62c2f5Ba4a7164011b0Ed2dCfc8ad45',
//         '0x800a9c5a4d913054730d709f6895ADC8EB06843c',
//         1
//       );

//       // Check if the result contains a transaction hash
//       expect(result).toBeDefined();
//     });
//   });

  // Test case for the getAllBlocks method
  describe('getAllBlocks', () => {
    it('should return an array of blocks', async () => {
      const web3Service = new Web3Service('HTTP://127.0.0.1:7545');
      const blocks = await web3Service.getAllBlocks();
      expect(Array.isArray(blocks)).toBe(true); // Check if blocks is an array
    });
  });

  // Test case for the getBlockCount method
  describe('getBlockCount', () => {
    it('should return the block count', async () => {
      const web3Service = new Web3Service('HTTP://127.0.0.1:7545');
      const blockCount = await web3Service.getBlockCount();
      expect(blockCount).toBeGreaterThanOrEqual(0); // Check if blockCount is a non-negative number
    });
  });
});
