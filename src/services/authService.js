import Axios from './axiosConfig'

const loginUser = (email, password) => {
  return Axios.post('/users/sessions', { email, password });
}

export {loginUser};
