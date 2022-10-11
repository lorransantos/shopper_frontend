import * as style from './style';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../images/bag-order.png';
import { useContext } from 'react';
import GlobalContext from '../../global/Context';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToStock } from '../../routes/coordinator';

const Header = (props) => {
  const { sideBar, setSideBar } = useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <style.Container>
      <style.HeadersGroups>
        <style.ButtonHome
          onClick={() => goToHomePage(navigate)}
          cursor={'pointer'}
        >
          <img src={logo} alt={'teste'} />
          <h1>Seu Mercado Digital</h1>
        </style.ButtonHome>
      </style.HeadersGroups>

      <style.HeadersGroups>
        {props.content === 'stock' ? (
          <style.Button onClick={() => goToHomePage(navigate)}>
            Loja
          </style.Button>
        ) : (
          <style.Button onClick={() => goToStock(navigate)}>
            Estoque
          </style.Button>
        )}        
        <AiOutlineShoppingCart
          onClick={() => {
            setSideBar(!sideBar);
          }}
          size={'40px'}
          color={'#ffffff'}
          cursor={'pointer'}
        />
      </style.HeadersGroups>
    </style.Container>
  );
};

export default Header;
