import { routerReducer } from 'react-router-redux'
import { reducer as txReducer, actions as txActions } from 'src/services/tx'
import { reducer as blockReducer, actions as blockActions } from 'src/services/block'
import { getLastBlockHeight, getBlockByHeight, getTxByHashes } from 'src/api'

const consts = {
  LOAD_INITIAL_DATA: 'APP:LOAD_INITIAL_DATA',
  LOAD_INITIAL_DATA_SUCCESS: 'APP:LOAD_INITIAL_DATA_SUCCESS',
  LOAD_INITIAL_DATA_ERROR: 'APP:LOAD_INITIAL_DATA_ERROR',
};

const actions = {
  loadInitialData: () => dispatch => {
    dispatch({type: consts.LOAD_INITIAL_DATA});
    const lastBlockHeightPromise = getLastBlockHeight();
    const tenLastBlocksPromise = lastBlockHeightPromise.then(height => {
      return Promise.all([0,1,2,3,4,5,6,7,8,9].map(n => getBlockByHeight(height - n)))
    });
    const tenLastTxPromise = tenLastBlocksPromise.then(blocks => {
      let tx = [];
      let blockIdx = -1;
      while(tx.length < 10, blockIdx++) {
        tx = tx.concat(blocks[blockIdx].tx.map(({hash}) => hash));
      }
      return getTxByHashes(tx.slice(0,10));
    })

    Promise.all([
      lastBlockHeightPromise,
      tenLastBlocksPromise,
      tenLastTxPromise,
    ])
      .then(([lastBlockHeight, blockList, txList]) => {
        dispatch(blockActions.setBlocksByHeight(blockList, blockList.map(v => v.height)))
        dispatch(txActions.setTxByHash(txList, txList.map(v => v.hash)))
        dispatch(actions.loadInitialDataSuccess(lastBlockHeight))
      })
      .catch(error => {
        dispatch(actions.loadInitialDataError(error))
      })
  },
  loadInitialDataSuccess: (lastBlockHeight) => ({type: consts.LOAD_INITIAL_DATA_SUCCESS, lastBlockHeight}),
  loadInitialDataError: (error) => ({type: consts.LOAD_INITIAL_DATA_ERROR, error}),

};

const initialState = {
  app: {
    state: 'notloaded',
    error: '',
  },
  last_block_height: null,
};

const reducer = (state = initialState, action) => {
  const newState = {
    ...state,
    router: routerReducer(state.router, action),
    tx_by_hash: txReducer(state.tx_by_hash, action),
    block_by_height: blockReducer(state.block_by_height, action),
  };

  switch (action.type) {
    case consts.LOAD_INITIAL_DATA:
      return (
        Object.assign(newState, {
          app: {
            ...state.app,
            state: 'loading',
            error: '',
          },
        })
      )
    case consts.LOAD_INITIAL_DATA_SUCCESS:
      return (
        Object.assign(newState, {
          last_block_height: action.lastBlockHeight,
          app: {
            ...state.app,
            state: 'loaded',
            error: '',
          },
        })
      )
    case consts.LOAD_INITIAL_DATA_ERROR:
      return (
        Object.assign(newState, {
          app: {
            ...state.app,
            state: 'error',
            error: action.error,
          },
        })
      )
    default:
      return newState;
  }
}

export {
  consts,
  actions,
  reducer,
}
