import { push } from 'react-router-redux';

import authService from '../../services/authService';
import asyncActionsGenerator from '../../utils/asyncActionsGenerator';

const asyncActions = [
  { type: 'GET_CURRENT_USER',  dispatchActions: [] },
  { type: 'LOG_IN',            dispatchActions: [ push('/dashboard'), 'getCurrentUser' ] },
  { type: 'SIGN_UP',           dispatchActions: [ push('/login') ] },
];

const actionTypes = asyncActionsGenerator.generateAsyncTypes(asyncActions);

const actionCreators = asyncActionsGenerator.generateAsyncCreators(asyncActions, actionTypes, authService);

export { actionCreators, actionTypes }
