import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== 
  'production' && 
  logger,
  thunk
].filter(Boolean);
 
const composeEnhancer = 
  (process.env.NODE_ENV !== 'production' && 
    window && 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
);

export const persistor = persistStore(store); 