import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { runSaga, storeIO } from 'redux-saga';

import store from './store';
import rootSaga from './sagas';

import {
  Application,
  IndexContainer
} from './containers';

runSaga(
  rootSaga(store.getState),
  storeIO(store),
  action => Promise.resolve(1).then(() => store.dispatch(action))
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <Route path="/index" component={IndexContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
