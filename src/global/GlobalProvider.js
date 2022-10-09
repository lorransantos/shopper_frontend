import { useState } from 'react';
import GlobalContext from './Context';

const GlobalProvider = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <GlobalContext.Provider value={{ products, setProducts }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalProvider;
