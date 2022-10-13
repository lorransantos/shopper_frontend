import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export const getProducts = (token, setProducts) => {
  axios
    .get(`${BASE_URL}/product`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error) => console.log(error.response.data.message));
};
