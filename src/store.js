import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';
import vatSaga from './sagas/vat';

export default function configureStore() {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})

  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, createLogger())
    )
  );

  sagaMiddleware.run(vatSaga);

  return store;
}
