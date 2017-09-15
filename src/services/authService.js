import Axios from './axiosConfig'

const setAuthentication = () => {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
}

const loginUser = (email, password) => {
  return Axios.post('/users/sessions', { email, password }).then((response) => {
    localStorage.setItem('access_token', response.data.access_token);
    setAuthentication();
    return response;
  });
}

const signUp = (user) => {
  user.locale = 'en';
  return Axios.post('/users', { user });
}

const userAuthenticated = () => {
  if (localStorage.getItem('access_token')) {
    setAuthentication();
    return true;
  }
  return false;
}

export {loginUser, signUp, userAuthenticated};
