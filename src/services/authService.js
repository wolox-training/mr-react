import Axios from './axiosConfig'

const loginUser = (email, password) => {
  return Axios.post('/users/sessions', { email, password });
}

const signUp = (user) => {
  user.locale = 'en';
  return Axios.post('/users', { user });
}

export {loginUser, signUp};
