import LoginForm from './LoginForm';
import * as style from './styles';

const LoginPage = () => {
  return (
    <style.Container>
      <style.SideBar>
        <h1>SEU SUPERMERCADO DIGITAL</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
        <h1>FAÇA COMPRAS COM AS MELHORES OFERTAS SEM SAIR DE CASA</h1>
      </style.SideBar>
      <style.LoginContainer>
        <style.LoginCard>
          <h1>Login</h1>
          <LoginForm />
          <p>
            Não possui conta?{' '}
            <style.SignupButton>Cadastre-se</style.SignupButton>
          </p>
        </style.LoginCard>
      </style.LoginContainer>
    </style.Container>
  );
};

export default LoginPage;
