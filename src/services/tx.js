import { fromJS, Map, merge } from 'immutable'
import { getTxByHash } from 'src/api'

const consts = {
  SET_TX_BY_HASH: 'TX:SET_TX_BY_HASH',
  LOAD_TX_BY_HASH: 'TX:LOAD_TX_BY_HASH',
  LOAD_TX_BY_HASH_SUCCESS: 'TX:LOAD_TX_BY_HASH_SUCCESS',
  LOAD_TX_BY_HASH_ERROR: 'TX:LOAD_TX_BY_HASH_ERROR',
};

const actions = {
  setTxByHash: (tx, hashes) => ({type: consts.SET_TX_BY_HASH, tx, hashes}),
  loadTxByHash: hash => dispatch => {
    getTxByHash(hash).then(tx => {
      dispatch(actions.loadTxByHashSuccess(hash, tx));
    })
    .catch(error => {
      dispatch(actions.loadTxByHashError(hash, error));
    })
  },
  loadTxByHashSuccess: (hash, tx) => ({type: consts.LOAD_TX_BY_HASH_SUCCESS, hash, tx}),
  loadTxByHashError: (hash, error) => ({type: consts.LOAD_TX_BY_HASH_ERROR, hash, error}),
};

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case consts.SET_TX_BY_HASH:
      const { tx, hashes } = action;
      return state.merge(
        fromJS(hashes.reduce((obj, hash, idx) => {
          obj[hash] = tx[idx];
          return obj;
        }, {}))
      )
    case consts.LOAD_TX_BY_HASH_SUCCESS:
      return state.set(action.hash, fromJS(action.tx));
    default:
      return state;
  }
}

export { consts, actions, reducer }
