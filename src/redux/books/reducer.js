import { actionTypes } from './actions';

const initialState = {
  books: [],
  book: {
    title: '',
    author: '',
    image_url: ''
  },
  rents: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_SUCCESS:
      return {...state, books: action.payload.books };
    case actionTypes.GET_BOOK_DETAIL_SUCCESS:
      return {...state, book: action.payload.book };
    case actionTypes.GET_BOOK_RENTS_SUCCESS:
      return {...state, rents: action.payload.rents };
    default:
      return state;
  }
}

export default booksReducer;
