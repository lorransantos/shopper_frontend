import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export const addDeliveryOrder = (token, body, clear) => {
  axios
    .post(`${BASE_URL}/delivery/add-delivery`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      clear();
    })
    .catch((err) => console.log(err.data));
};
