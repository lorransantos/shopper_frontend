import * as style from './style';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../images/bag-order.png';
import { useContext } from 'react';
import GlobalContext from '../../global/Context';

const Header = () => {
  const { sideBar, setSideBar } = useContext(GlobalContext);

  // console.log(sideBar);
  // console.log('oi')

  return (
    <style.Container>
      <style.HeadersGroups>
        <img src={logo} alt={'teste'} />
      </style.HeadersGroups>

      <style.HeadersGroups>
        <style.Button>Estoque</style.Button>

        <AiOutlineShoppingCart
          onClick={() => setSideBar(!sideBar)}
          size={'40px'}
          color={'#ffffff'}
          cursor={'pointer'}
        />
      </style.HeadersGroups>
    </style.Container>
  );
};

export default Header;
