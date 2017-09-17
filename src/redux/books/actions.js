import bookService from '../../services/bookService';
import asyncActionsGenerator from '../../utils/asyncActionsGenerator';

const asyncActions = [
  { type: 'GET_BOOKS',          dispatchActions: [] },
  { type: 'GET_BOOK_DETAIL',    dispatchActions: [] },
  { type: 'GET_BOOK_RENTS',     dispatchActions: [] },
  { type: 'ADD_TO_WISHLIST',    dispatchActions: [] }
];

const actionTypes = asyncActionsGenerator.generateAsyncTypes(asyncActions);

const actionCreators = asyncActionsGenerator.generateAsyncCreators(asyncActions, actionTypes, bookService);

export { actionCreators, actionTypes }
