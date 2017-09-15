import { getAllBooks, getBook, getRents } from '../../services/bookService'

const actionTypes = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_ERROR: 'GET_BOOKS_ERROR',
  GET_BOOK_DETAIL: 'GET_BOOK_DETAIL',
  GET_BOOK_DETAIL_SUCCESS: 'GET_BOOK_DETAIL_SUCCESS',
  GET_BOOK_DETAIL_ERROR: 'GET_BOOK_DETAIL_ERROR',
  GET_BOOK_RENTS: 'GET_BOOK_RENTS',
  GET_BOOK_RENTS_SUCCESS: 'GET_BOOK_RENTS_SUCCESS',
  GET_BOOK_RENTS_ERROR: 'GET_BOOK_RENTS_ERROR'
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
  },
  getBookRents(id) {
    return async dispatch => {
      dispatch({ type: actionTypes.GET_BOOK_DETAIL });
      getRents(id)
        .then((response) => {
          dispatch(actionCreators.getBookRentsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionCreators.getBookRentsError(error.response.data.error));
        })
    }
  },
  getBookRentsSuccess(rents) {
    return {
      type: actionTypes.GET_BOOK_RENTS_SUCCESS,
      payload: { rents }
    }
  },
  getBookRentsError(error) {
    return {
      type: actionTypes.GET_BOOK_RENTS_ERROR,
      payload: { error }
    }
  }

}

export { actionCreators, actionTypes }
