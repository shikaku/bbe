import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { selectors } from './selectors'
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
      return Promise.all([...Array(10).keys()].map(n => getBlockByHeight(height - n)))
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
        dispatch(blockActions.setBlocksByHeight(blockList, blockList.map(v => v.block_index)))
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

const initialState = fromJS({
  app: {
    state: 'notloaded',
    error: '',
  },
  last_block_height: null,
  routing: {
    locationBeforeTransitions: undefined,
  },
});

const reducer = (state = initialState, action) => {
  let newState = state
    .set('tx_by_hash', txReducer(state.get('tx_by_hash'), action))
    .set('block_by_height', blockReducer(state.get('block_by_height'), action));

  switch (action.type) {
    case LOCATION_CHANGE:
      return (
        newState.mergeDeep({routing: {locationBeforeTransitions: action.payload}})
      )
    case consts.LOAD_INITIAL_DATA:
      return (
        newState
          .setIn(['app', 'state'], 'loading')
          .setIn(['app', 'error'], '')
      )
    case consts.LOAD_INITIAL_DATA_SUCCESS:
      return (
        newState
          .setIn(['app', 'state'], 'loaded')
          .setIn(['app', 'error'], '')
          .set('last_block_height', action.lastBlockHeight)
      )
    case consts.LOAD_INITIAL_DATA_ERROR:
      return (
          newState
          .setIn(['app', 'state'], 'error')
          .setIn(['app', 'error'], action.error)
      )
    default:
      return newState;
  }
}

export { consts, actions, reducer, selectors }
