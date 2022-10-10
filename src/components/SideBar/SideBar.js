import { useContext, useEffect } from 'react';
import GlobalContext from '../../global/Context';
import { addOrder, deleteOrder, getOrders } from '../../services/Orders';
import {BsFillTrashFill} from 'react-icons/bs'
import SideBarForm from './SideBarForm';
import * as style from './style';

const SideBar = () => {
  const { sideBar, shoppingCart, setShoppingCart, total, setTotal } =
    useContext(GlobalContext);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getOrders(token, setShoppingCart);
  }, [token, setShoppingCart]);

  // useEffect(() => {
  //   addOrder(token, test)
  // })

  useEffect(() => {
    const newArray = [];
    shoppingCart &&
      shoppingCart.forEach((element) => {
        newArray.push(element.price * element.product_qty);
        return setTotal(
          parseFloat(
            newArray.reduce((previous, current) => previous + current),
          ).toFixed(2),
        );
      });
  }, [shoppingCart, setTotal]);

  return (
    <style.ContainerSideBar sideBar={sideBar}>
      <style.OrdersList>
        {shoppingCart &&
          shoppingCart.map((item, index) => {
            const price = parseFloat(item.price * item.product_qty).toFixed(2);
            return (
              <style.Card key={index}>
                <p>
                  <span>Nome:</span> {item.name}
                </p>
                <p>
                  <span>Preço:</span> R$ {price}
                </p>
                <style.AlterQuantity>
                  <p>
                    <span>Quantidade:</span> {item.product_qty} und.
                  </p>
                  <style.AddOrRemoveButton
                    onClick={() => {
                      addOrder(token, {
                        productId: item.product_id,
                        quantity: -1,
                      });
                    }}
                  >
                    -
                  </style.AddOrRemoveButton>
                  <style.AddOrRemoveButton
                    onClick={() => {
                      addOrder(token, {
                        productId: item.product_id,
                        quantity: 1,
                      });
                    }}
                  >
                    +
                  </style.AddOrRemoveButton>
                  <style.AddOrRemoveButton
                    onClick={() => {
                      deleteOrder(token, { orderId: item.id });
                    }}
                  >
                    <BsFillTrashFill />
                  </style.AddOrRemoveButton>
                </style.AlterQuantity>
              </style.Card>
            );
          })}
      </style.OrdersList>
      <h2>Total: R$ {total}</h2>
      <SideBarForm />
      {/* <style.Button onClick={() => console.log('teste')}>
        Finalizar compra
      </style.Button> */}
    </style.ContainerSideBar>
  );
};

export default SideBar;
