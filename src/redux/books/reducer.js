import { actionTypes } from './actions';

const initialState = {
  books: [],
  book: {
    title: '',
    author: '',
    image_url: ''
  }
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_SUCCESS:
      return {...state, books: action.payload.books };
    case actionTypes.GET_BOOK_DETAIL_SUCCESS:
      return {...state, book: action.payload.book };
    default:
      return state;
  }
}

export default booksReducer;
