import Axios from './axiosConfig'

const setAuthentication = () => {
  Axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
};

const userAuthenticated = () => {
  if (localStorage.getItem('access_token')) {
    setAuthentication();
    return true;
  }
  return false;
}

const logIn = (user) => {
  return Axios.post('/users/sessions', user)
    .then((response) => {
      localStorage.setItem('access_token', response.data.access_token);
      setAuthentication();
      return response;
    });
}

const signUp = (user) => {
  user.locale = 'en';
  return Axios.post('/users', { user });
}

const getCurrentUser = () => {
  return Axios.get('/users/me');
}

const authService = {
  setAuthentication,
  logIn,
  signUp,
  userAuthenticated,
  getCurrentUser
}

export default authService;
