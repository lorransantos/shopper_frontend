import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export const getOrders = (token, setShopping) => {
  axios
    .get(`${BASE_URL}/order/`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setShopping(res.data);
      // console.log(res.data);
    })
    .catch((error) => console.log(error.data));
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
      console.log(res);
    })
    .catch((error) => {
      console.log('deu ruim');
      // console.log(token);
      console.log(body);
      console.log(error);
    });
};

export const deleteOrder = (token, body) => {
  // console.log('remove', token);
  // const body = {
  //   orderId: '964906df-30d9-4835-9b95-e34645d33c93',
  // };
  console.log('remove', body);

  axios
    .put(`${BASE_URL}/order/delete-order`, body, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNiZGYxN2M4LWI3NTctNDM5MC05ODk4LWFlOTY0YmI0YTUwNCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2NTM0NTI2MCwiZXhwIjoxNjY1NDMxNjYwfQ.1jGxP2QFCCy0jBhuXDApp5vzjSHWL45asHIAvRLqutA',
      },
    })
    .then((res) => {
      console.log('deu bom');
      console.log(res.data);
    })
    .catch((error) => {
      console.log('deu ruim');
      console.log(token);
      console.log(error);
    });
};
