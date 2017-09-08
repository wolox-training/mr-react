import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
});

export default Axios
