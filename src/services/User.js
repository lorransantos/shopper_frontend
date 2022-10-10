import axios from 'axios';
import { goToHomePage } from '../routes/coordinator';

export const login = (body, clear, navigate) => {
  axios
    .post('http://localhost:3003/user/login', body)
    .then((res) => {
      clear();
      localStorage.setItem('token', res.data.token);
      goToHomePage(navigate);
      console.log(res.data.token);
    })
    .catch((error) => error.data);
};

// {
//   "email": "goku@gmail.com",
//   "password": "123456"
// }
