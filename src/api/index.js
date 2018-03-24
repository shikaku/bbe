import fetch from 'src/utils/fetch'

const request = (() => {
  const url = 'https://blockchain.info';
  return path => fetch(`${url}${path}?cors=true`)
})();

export const getTx = (hash) => request(`/rawtx/${hash}`);

export const getTxList = (hashes) => Promise.all(hashes.map(hash => request(`/rawtx/${hash}`)))

export const getBlockByHeight = (height) => request(`/rawblock/${height}`);

export const getLastBlockHeight = () => request(`/latestblock`).then(({block_index}) => block_index);
