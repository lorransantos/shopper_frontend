import { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import GlobalContext from '../../global/Context';
import { getProducts } from '../../services/Product';
import * as style from './style';

const StockPage = () => {
  const { products, setProducts } = useContext(GlobalContext);

  const token = localStorage.getItem('token');

  useEffect(() => {
    getProducts(token, setProducts);
  }, [token, setProducts]);

  return (
    <div>
      <Header content={'stock'} />
      <SideBar />
      <style.ContainerStock>
        <style.StockTable>
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>preço</th>
              <th>quantidade</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((item) => {
                return (
                  <tr key={item.id}>
                    {/* <tr> */}
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>R$ {item.price}</td>
                    <td>{item.qty_stock} und.</td>
                    {/* </tr> */}
                  </tr>
                );
              })}
          </tbody>
        </style.StockTable>
      </style.ContainerStock>
    </div>
  );
};

export default StockPage;
