import { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import GlobalContext from '../../global/Context';
import useProtectPage from '../../hooks/usePortectPage';
import { addOrder } from '../../services/Orders';
import { getProducts } from '../../services/Product';
import * as style from './style.js';

const ProductsPage = () => {
  const { products, setProducts, render, setRender } =
    useContext(GlobalContext);

  useProtectPage();

  const token = localStorage.getItem('token');
  useEffect(() => {
    getProducts(token, setProducts);
  }, [token, setProducts, render]);

  return (
    <>
      <Header />
      <SideBar />
      <style.Container>
        {products &&
          products.map((item, index) => {
            return (
              <style.Card key={index}>
                <style.CardTytle>
                  <h2>{item.name}</h2>
                </style.CardTytle>
                <p>R$ {item.price}</p>
                <style.Button
                  onClick={() => {
                    const body = {
                      productId: item.id,
                      quantity: 1,
                    };
                    addOrder(token, body, render, setRender);
                  }}
                >
                  Comprar
                </style.Button>
              </style.Card>
            );
          })}
      </style.Container>
    </>
  );
};

export default ProductsPage;
