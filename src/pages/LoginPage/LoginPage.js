import LoginForm from './LoginForm';
import bag from '../../images/bag-order.png';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import { goToSignup } from '../../routes/coordinator';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <style.Container>
      <style.SideBar>
        <h1>SEU SUPERMERCADO DIGITAL</h1>
        <h1>Tenha acesso as melhores ofertas sem sair de casa!</h1>
        <img src={bag} alt={'Logo com duas sacolas'} />
      </style.SideBar>
      <style.LoginContainer>
        <style.LoginCard>
          <h1>Login</h1>
          <LoginForm />
          <p>
            Não possui conta?{' '}
            <style.SignupButton onClick={() => goToSignup(navigate)}>
              Cadastre-se
            </style.SignupButton>
          </p>
        </style.LoginCard>
      </style.LoginContainer>
    </style.Container>
  );
};

export default LoginPage;
