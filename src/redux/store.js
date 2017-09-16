import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createBrowserHistory'
import { routerReducer as router, routerMiddleware } from 'react-router-redux';

import booksReducer from './books/reducer';
import authReducer from './auth/reducer';

const reducers = combineReducers({
  books: booksReducer,
  auth: authReducer,
  form: formReducer,
  router
});

export const history = createHistory();
const middlewares = [routerMiddleware(history)];
middlewares.push(thunk);

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
