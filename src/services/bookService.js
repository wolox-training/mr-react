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
  return Axios.post(`users/${params.user_id}/wishes`, { wish: params });
};

const bookService = {
  getBooks,
  getBookDetail,
  getBookRents,
  addToWishlist
};

export default bookService;
