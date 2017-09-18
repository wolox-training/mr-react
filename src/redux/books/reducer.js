import { actionTypes } from './actions';

const initialState = {
  books: [],
  book: {
    title: '',
    author: '',
    image_url: ''
  },
  rents: [],
  comments: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_SUCCESS:
      return {...state, books: action.payload.data };
    case actionTypes.GET_BOOK_DETAIL_SUCCESS:
      return {...state, book: action.payload.data };
    case actionTypes.GET_BOOK_RENTS_SUCCESS:
      return {...state, rents: action.payload.data };
    case actionTypes.GET_BOOK_COMMENTS_SUCCESS:
      return {...state, comments: action.payload.data };
    default:
      return state;
  }
}

export default booksReducer;
