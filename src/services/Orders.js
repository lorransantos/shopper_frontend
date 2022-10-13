import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export const getOrders = (token, setShoppingCart) => {
  axios
    .get(`${BASE_URL}/order/`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setShoppingCart(res.data);
    })
    .catch((error) => alert(error.response.data.message));
};

export const addOrder = (token, body, render, setRender) => {
  axios
    .post(`${BASE_URL}/order/add-order`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setRender(!render);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const deleteOrder = (token, body, render, setRender) => {
  axios
    .put(`${BASE_URL}/order/delete-order`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setRender(!render);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
