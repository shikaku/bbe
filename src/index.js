import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createStore from './store'
import reducer from './reducer'
import Routes from './routes'
import App from 'src/components/App'
import './style.css'

const store = createStore(reducer, thunk);
store.subscribe(() => {
  console.log(store.getState());
})
window.__store__ = store;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
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
