import Axios from './axiosConfig'

const getAllBooks = (filter) => {
  return Axios.get('/books', { params: filter });
}

const getBook = (id) => {
  return Axios.get(`/books/${id}`);
}

export {getAllBooks, getBook};
