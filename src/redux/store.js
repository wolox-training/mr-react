import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './books/reducer';

const reducers = combineReducers({
  booksReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
