import Axios from './axiosConfig';

const getBooks = (filter) => {
  return Axios.get('/books', { params: filter });
}

const getBookDetail = (id) => {
  return Axios.get(`/books/${id}`);
}

const getBookRents = (id) => {
  return Axios.get(`/books/${id}/rents`);
}

const addToWishlist = (params) => {
  return Axios.post(`/users/${params.user_id}/wishes`, { wish: params });
}

const getBookComments = (id) => {
  return Axios.get(`/books/${id}/comments`);
}

const addBookComment = (params) => {
  return Axios.post(`/books/${params.book_id}/comments`, { comment: params });
}

const bookService = {
  getBooks,
  getBookDetail,
  getBookRents,
  addToWishlist,
  getBookComments,
  addBookComment
};

export default bookService;
