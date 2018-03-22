import { createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

export default (reducer, middlewares = []) => {
  if (!Array.isArray(middlewares)) middlewares = [middlewares];
  return createStore(reducer, compose(
    applyMiddleware(...middlewares),
  ));
}
