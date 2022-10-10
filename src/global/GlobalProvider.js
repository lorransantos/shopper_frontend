import { useState } from 'react';
import GlobalContext from './Context';

const GlobalProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);

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
          total,
          setTotal,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalProvider;
