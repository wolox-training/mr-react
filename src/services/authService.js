import axios from 'axios';

const loginUser = (email, password) => {
  return axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', { email, password });
}

export {loginUser};
