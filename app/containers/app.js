/**
 * This is the entrance file of this app
 **/

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';
import createLogger from 'redux-logger';

import * as reducers from '../reducers';
import sagaRoot from '../sagas';
import CounterApp from './counterApp';

// The middlewares which will be used in this App
const middlewares = [];
// Initial the reducers
const reducer = combineReducers(reducers);
// Initial the saga middleware
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

// Apply middlewares to store
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//
// function createDefaultStore(initialState) {
//   const defaultStore = createStoreWithMiddleware(reducer, initialState);
//   return defaultStore;
// }

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(sagaRoot);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
