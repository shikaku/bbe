import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createStore from './store'
import reducer from './reducer'
import Routes from './routes'
import App from 'src/containers/App'
import './style.css'

const store = createStore(reducer, thunk);
store.subscribe(() => {
  console.log(store.getState().toJS());
})
const history = syncHistoryWithStore(createBrowserHistory(), store, {
  selectLocationState: state => state.get('routing')
});
window.__store__ = store;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Routes />
      </App>
    </Router>
  </Provider>
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
