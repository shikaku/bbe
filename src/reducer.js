import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as txReducer } from 'src/services/tx'
 
export default combineReducers({
  router: routerReducer,
  tx_map: txReducer,
})
