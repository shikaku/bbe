import { getBlock } from 'src/api'

const consts = {
  FETCH: 'BLOCK:FETCH',
  FETCH_SUCCESS: 'BLOCK:FETCH_SUCCESS',
  FETCH_ERROR: 'BLOCK:FETCH_ERROR',
};

const actions = {
  fetch: id => dispatch => {
    if (!Array.isArray(id)) id = [id];
    getBlock(id).then(({success, error, data}) => {
      dispatch(success
        ? actions.fetchSuccess(id, data)
        : actions.fetchError(id, error)
      );
    })
  },
  fetchSuccess: (id, data) => ({type: consts.FETCH_SUCCESS, id, payload: data}),
  fetchError: (id, error) => ({type: consts.FETCH_ERROR, id, error}),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.FETCH_SUCCESS:
      return {
        ...state,
        [action.id]: action.payload,
      }
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
