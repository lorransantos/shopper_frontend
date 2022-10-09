import axios from 'axios';
// import { useContext } from 'react';
// import GlobalContext from '../global/Context';

export const getProducts = (token, setProducts) => {
  axios
    .get('http://localhost:3003/product', {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      // console.log(res.data);
      setProducts(res.data);
    });
};
