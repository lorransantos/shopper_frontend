import { useState } from 'react';
import GlobalContext from './Context';

const GlobalState = (props) => {
  const [products, setProducts] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [render, setRender] = useState(false);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          products,
          setProducts,
          shoppingCart,
          setShoppingCart,
          sideBar,
          setSideBar,
          render,
          setRender,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalState;
