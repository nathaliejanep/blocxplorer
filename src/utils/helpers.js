// // Convert wei to ether
// export function weiToEther(wei: string) {
//     return web3.utils.fromWei(wei, 'ether');
// }

// // Convert ether to wei
// export function etherToWei(ether: string) {
//     return web3.utils.toWei(ether, 'ether');
// }

// // Handle error
// export function handleError(error: Error) {
//     console.error('Error:', error);
//     throw error;
// }

// Format from UNIX
export const formatTimestamp = (timestamp) => {
  const date = new Date(Number(timestamp) * 1000); // Convert BigInt to number
  //   const relativeTime = window.dateFns.formatDistanceToNow(new Date());
  return date.toLocaleString();
};
