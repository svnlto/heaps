import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

import reducers from '../reducers';

const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const finalCreateStore = compose(
  applyMiddleware(reduxRouterMiddleware, createLogger())
)(createStore);
const store = finalCreateStore(rootReducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
