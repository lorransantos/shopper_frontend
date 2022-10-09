import axios from 'axios';

export const login = (body, clear) => {
  axios
    .post('http://localhost:3003/user/login', body)
    .then((res) => {
      clear();
      localStorage.setItem('token', res.data.token);
      console.log(res.data.token);
    })
    .catch((error) => error.data);
};

// {
//   "email": "goku@gmail.com",
//   "password": "123456"
// }
