/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers, { rootSaga } from './modules';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware),
      window.REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
