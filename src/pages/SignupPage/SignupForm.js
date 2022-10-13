import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/User';
import * as style from './styles';

const SignupForm = () => {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const loginBody = {
      email: form.email,
      password: form.password,
    };
    signup(form, loginBody, clear, navigate);
  };

  return (
    <style.Form onSubmit={onSubmitForm}>
      <style.Input
        type={'text'}
        name={'name'}
        placeholder='Nome'
        onChange={onChange}
        value={form.name}
      />
      <style.Input
        type={'email'}
        name={'email'}
        placeholder='Email'
        onChange={onChange}
        value={form.email}
      />
      <style.Input
        type={'password'}
        name={'password'}
        placeholder='Senha'
        onChange={onChange}
        value={form.password}
      />
      <style.Button>Logar</style.Button>
    </style.Form>
  );
};

export default SignupForm;
