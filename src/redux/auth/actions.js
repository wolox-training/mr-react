import { push } from 'react-router-redux';

import authService from '../../services/authService';
import asyncActionsGenerator from '../../utils/asyncActionsGenerator';

const asyncActions = [
  { type: 'GET_CURRENT_USER',  dispatchActions: [] },
  { type: 'LOG_IN',            dispatchActions: [ push('/dashboard') ] },
  { type: 'SIGN_UP',           dispatchActions: [ push('/login') ] },
  { type: 'GET_USER_WISHLIST', dispatchActions: []},
  { type: 'GET_USER_RENTS',    dispatchActions: []},
  { type: 'GET_USER_COMMENTS', dispatchActions: []}
];

const actionTypes = asyncActionsGenerator.generateAsyncTypes(asyncActions);

const actionCreators = asyncActionsGenerator.generateAsyncCreators(asyncActions, actionTypes, authService);

export { actionCreators, actionTypes }
