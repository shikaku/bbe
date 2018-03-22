import fetch from 'src/utils/fetch'

const request = (() => {
  const url = 'https://blockchain.info';
  return path => fetch(`${url}${path}?cors=true`)
    .then(data => ({
      success: true,
      error: false,
      data,
    }))
    .catch(err => ({
      success: false,
      error: err,
    }));
})();

export const getTx = (hash) => request(`/rawtx/${hash}`);

export const getTxList = (hashes) => Promise.all(hashes.map(hash => request(`/rawtx/${hash}`)))

export const getBlock = (height) => request(`/rawblock/${height}`);

export const getLastBlockHeight = () => request(`/latestblock`).then(({height}) => height);
