import { getLastBlockHeight } from 'src/api'
import { actions as  }

const consts = {
  INIT: 'APP:FETCH',
  INIT_SUCCESS: 'APP:FETCH_SUCCESS',
  INIT_ERROR: 'APP:FETCH_ERROR',
};

const actions = {
  init: () => dispatch => {
    getLastBlockHeight().then(({success, error, data}) => {
      dispatch(success
        ? appActions.initSuccess(data)
        : appActions.initError(error)
      );
    })
  },
  initSuccess: (data) => ({type: consts.FETCH_SUCCESS, id, payload: data}),
  initError: (error) => ({type: consts.FETCH_ERROR, id, error}),
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
