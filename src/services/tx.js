const consts = {
  SET_TX_BY_HASH: 'TX:SET_TX_BY_HASH',
};

const actions = {
  setTxByHash: (tx, hashes) => ({type: consts.SET_TX_BY_HASH, tx, hashes}),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_TX_BY_HASH:
      const { tx, hashes } = action;
      return hashes.reduce((obj, hash, idx) => {
        obj[hash] = tx[idx];
        return obj;
      }, {...state})
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
