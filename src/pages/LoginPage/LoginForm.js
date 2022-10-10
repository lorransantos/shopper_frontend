import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/User';
import * as style from './styles';

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: '', password: '' });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <style.Form onSubmit={onSubmitForm}>
      <style.Input
        type={'email'}
        name={'email'}
        placeholder="Email"
        onChange={onChange}
        value={form.email}
      />
      <style.Input
        type={'password'}
        name={'password'}
        placeholder="Senha"
        onChange={onChange}
        value={form.password}
      />
      <style.Button>Logar</style.Button>
    </style.Form>
  );
};

export default LoginForm;
