import { useContext } from 'react';
import GlobalContext from '../../global/Context';
import { getProducts } from '../../services/Product';
import * as style from './style.js';

const ProductsPage = () => {
  const { products, setProducts } = useContext(GlobalContext);

  const token = localStorage.getItem('token');
  // console.log(token);
  getProducts(token, setProducts);
  // console.log(products && products);

  return (
    <>
      {/* <h1>Selecione abaixo os seus produtos</h1> */}
      <style.Container>
        {products &&
          products.map((item, index) => {
            return (
              <style.Card key={index}>
                <style.CardTytle>
                  <h2>{item.name}</h2>
                </style.CardTytle>
                <p>R$ {item.price}</p>
                <style.Button>Comprar</style.Button>
              </style.Card>
            );
          })}
      </style.Container>
    </>
  );
};

export default ProductsPage;
