import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import * as style from './style';

const SignupForm = () => {
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form, clear);
  };

  // "name": "Vegeta",
  // "email": "vegeta@gmail.com",
  // "password": "123456",
  // "role": "ADMIN"

  return (
    <style.Form onSubmit={onSubmitForm}>
      <style.Input
        type={'text'}
        name={'name'}
        placeholder="Nome"
        onChange={onChange}
        value={form.name}
      />
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
      <style.Input
        type={'text'}
        name={'role'}
        placeholder="Role"
        onChange={onChange}
        value={form.role}
      />
      <style.Button>Logar</style.Button>
    </style.Form>
  );
};

export default SignupForm;
