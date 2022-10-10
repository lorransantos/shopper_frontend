import SignupForm from './SignupForm';
import bag from '../../images/bag-order.png';
import * as style from './style';
const SignupPage = () => {
  return (
    <style.Container>
      <style.SignupContainer>
        <style.SignupCard>
          <h1>Cadastro</h1>
          <SignupForm />
          <p>Não possui conta? </p>
        </style.SignupCard>
      </style.SignupContainer>
      <style.SideBar>
        <h1>SEU SUPERMERCADO DIGITAL</h1>
        <h1>Tenha acesso as melhores ofertas sem sair de casa!</h1>
        <img src={bag} alt={'Logo com duas sacolas'} />
      </style.SideBar>
    </style.Container>
  );
};

export default SignupPage;
