import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../global/Context';
import { addOrder, deleteOrder, getOrders } from '../../services/Orders';
import { BsFillTrashFill } from 'react-icons/bs';
import SideBarForm from './SideBarForm';
import * as style from './style';

const SideBar = () => {
  const { sideBar, shoppingCart, setShoppingCart, render, setRender } =
    useContext(GlobalContext);
  const [total, setTotal] = useState(0);

  const token = localStorage.getItem('token');

  const onClickAddOrder = (id, numberQuantity) => {
    return addOrder(
      token,
      {
        productId: id,
        quantity: numberQuantity,
      },
      render,
      setRender
    );
  };

  const onClickDeleteOrder = (id) => {
    return deleteOrder(token, { orderId: id }, render, setRender);
  };

  useEffect(() => {
    getOrders(token, setShoppingCart);
  }, [token, setShoppingCart, render]);

  useEffect(() => {
    const newArray = [];
    if (shoppingCart.length < 1) {
      setTotal(0);
    }
    shoppingCart &&
      shoppingCart.forEach((element) => {
        newArray.push(element.price * element.product_qty);
        return setTotal(
          parseFloat(
            newArray.reduce((previous, current) => previous + current)
          ).toFixed(2)
        );
      });
  }, [shoppingCart]);

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
                      item.product_qty > 1
                        ? onClickAddOrder(item.product_id, -1)
                        : onClickDeleteOrder(item.id);
                    }}
                  >
                    -
                  </style.AddOrRemoveButton>
                  <style.AddOrRemoveButton
                    onClick={() => {
                      onClickAddOrder(item.product_id, 1);
                    }}
                  >
                    +
                  </style.AddOrRemoveButton>
                  <style.AddOrRemoveButton
                    onClick={() => onClickDeleteOrder(item.id)}
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
    </style.ContainerSideBar>
  );
};

export default SideBar;
