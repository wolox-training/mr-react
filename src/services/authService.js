import Axios from './axiosConfig'

const setAuthentication = () => {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
}

const loginUser = (email, password) => {
  return Axios.post('/users/sessions', { email, password }).then((response) => {
    setAuthentication();
    return response;
  });
}

const signUp = (user) => {
  user.locale = 'en';
  return Axios.post('/users', { user });
}


export {loginUser, signUp, setAuthentication};
