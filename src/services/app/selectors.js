import { createSelector } from 'reselect'
 
const getLastBlockHeight = state => state.get('last_block_height')
const getBlockMap = state => state.get('block_by_height')
const getTxMap = state => state.get('tx_by_hash')
 
export const getLastTenBlocks = createSelector(
  [getLastBlockHeight, getBlockMap],
  (lastBlockHeight, blockMap) => {
    var a =     [...Array(10).keys()].map(i => blockMap.get(String(lastBlockHeight - i)))
    console.log(blockMap.toJS(), lastBlockHeight);
    return a;
  }
)

export const getLastTenTx = createSelector(
  [getLastTenBlocks, getTxMap],
  (lastTenBlocks, txMap) => {
    let hashes = [];
    for (let i=0; i<lastTenBlocks.length; i++) {
      hashes = hashes.concat(lastBlockHeight.get('tx').toJS());
      if (hashes.length >= 10) break;
    }
    return hashes.map(hash => getTxMap.get(hash))
  }
)
