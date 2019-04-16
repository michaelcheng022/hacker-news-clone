import { createStore } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';
import {fetchData, fetchDataStart, fetchDataError, recieveData } from './app/actions'

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, middleware);
  
  store.dispatch(fetchData());
  return store;
};

export default configureStore;