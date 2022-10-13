import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';
import { goToHomePage } from '../routes/coordinator';

export const login = (body, clear, navigate) => {
  axios
    .post('http://localhost:3003/user/login', body)
    .then((res) => {
      clear();
      localStorage.setItem('token', res.data.token);
      goToHomePage(navigate);
    })
    .catch((error) => alert(error.response.data.message));
};

export const signup = (body, loginBody, clear, navigate) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      login(loginBody, clear, navigate);
    })
    .catch((error) => alert(error.response.data.message));
};
