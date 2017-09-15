import Axios from './axiosConfig'

const getAllBooks = (filter) => {
  return Axios.get('/books', { params: filter });
}

const getBook = (id) => {
  return Axios.get(`/books/${id}`);
}

const getRents = (id) => {
  return Axios.get(`/books/${id}/rents`);
}

export {getAllBooks, getBook, getRents};
