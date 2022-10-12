import SignupForm from './SignupForm';
import bag from '../../images/bag-order.png';
import * as style from './styles';
import useUnprotectPage from '../../hooks/useUnprotectPage';
import { goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  useUnprotectPage();
  const navigate = useNavigate();
  return (
    <style.Container>
      <style.SignupContainer>
        <style.SignupCard>
          <h1>Cadastro</h1>
          <SignupForm />
          <p>
            Já possui conta?{' '}
            <style.LoginButton onClick={() => goToLoginPage(navigate)}>
              Faça o login
            </style.LoginButton>
          </p>
        </style.SignupCard>
      </style.SignupContainer>
      <style.SideBar>
        <h1>SEU SUPERMERCADO DIGITAL</h1>
        <h1>Tenha acesso as melhores ofertas sem sair de casa!</h1>
        <img
          src={bag}
          alt={'Logo com duas sacolas'}
        />
      </style.SideBar>
    </style.Container>
  );
};

export default SignupPage;
