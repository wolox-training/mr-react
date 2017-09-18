import bookService from '../../services/bookService';
import asyncActionsGenerator from '../../utils/asyncActionsGenerator';
import {reset} from 'redux-form';


const asyncActions = [
  { type: 'GET_BOOKS',          dispatchActions: [] },
  { type: 'GET_BOOK_DETAIL',    dispatchActions: [] },
  { type: 'GET_BOOK_RENTS',     dispatchActions: [] },
  { type: 'ADD_TO_WISHLIST',    dispatchActions: [] },
  { type: 'GET_BOOK_COMMENTS',  dispatchActions: [] },
  { type: 'ADD_BOOK_COMMENT',   dispatchActions: [ reset('comment-form') ] }
];

const actionTypes = asyncActionsGenerator.generateAsyncTypes(asyncActions);

const actionCreators = asyncActionsGenerator.generateAsyncCreators(asyncActions, actionTypes, bookService);

export { actionCreators, actionTypes }
