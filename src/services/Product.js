import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';
// import { useContext } from 'react';
// import GlobalContext from '../global/Context';

export const getProducts = (token, setProducts) => {
  axios
    .get(`${BASE_URL}/product`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
};

export const addOrder = (token, body) => {
  axios
    .post(`${BASE_URL}/order/add-order`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      console.log('deu bom');
      console.log(token);
      console.log(res.data);
    })
    .catch((error) => {
      console.log('deu ruim');
      console.log(token);
      console.log(body);
      console.log(error);
    });
};
