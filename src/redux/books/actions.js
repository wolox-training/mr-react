import { getAllBooks, getBook } from '../../services/bookService'

const actionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR: 'GET_BOOKS_ERROR',
  GET_BOOK_DETAIL: 'GET_BOOK_DETAIL',
  GET_BOOK_DETAIL_SUCCESS: 'GET_BOOK_DETAIL_SUCCESS',
  GET_BOOK_DETAIL_ERROR: 'GET_BOOK_DETAIL_ERROR'
}

const actionCreators = {
  getBooks(filter) {
    return async dispatch => {
      dispatch({ type: actionTypes.GET_BOOKS });
      getAllBooks(filter)
        .then((response) => {
          dispatch(actionCreators.getBooksSuccess(response.data));
        })
        .catch((response) => {
          dispatch(actionCreators.getBooksError(response.data));
        })
    }
  },
  getBooksSuccess(books) {
    return {
      type: actionTypes.GET_BOOKS_SUCCESS,
      payload: { books }
    };
  },
  getBooksError(error) {
    return {
      type: actionTypes.GET_BOOKS_ERROR,
      payload: { error }
    };
  },
  getBookDetail(id) {
    return async dispatch => {
      dispatch({ type: actionTypes.GET_BOOK_DETAIL });
      getBook(id)
        .then((response) => {
          dispatch(actionCreators.getBookDetailSuccess(response.data));
        })
        .catch((response) => {
          dispatch(actionCreators.getBookDetailError(response.data));
        })
    }
  },
  getBookDetailSuccess(book) {
    return {
      type: actionTypes.GET_BOOK_DETAIL_SUCCESS,
      payload: { book }
    };
  },
  getBookDetailError(error) {
    return {
      type: actionTypes.GET_BOOK_DETAIL_ERROR,
      payload: { error }
    };
  }
}

export { actionCreators, actionTypes }
