import useForm from '../../hooks/useForm';
import { addDeliveryOrder } from '../../services/Delivery';
import * as style from './style';

const SideBarForm = () => {
  const [form, onChange, clear, teste, setTeste] = useForm({
    receiveUserName: '',
    deliveryDate: '',
  });

  const token = localStorage.getItem('token');

  const onSubmitForm = (event) => {
    event.preventDefault();
    addDeliveryOrder(token, form, clear, teste, setTeste);
  };

  return (
    <style.Form onSubmit={onSubmitForm}>
      <style.Input
        type={'text'}
        name={'receiveUserName'}
        placeholder="Nome"
        onChange={onChange}
        value={form.receiveUserName}
      />
      <style.Input
        type={'date'}
        name={'deliveryDate'}
        placeholder="Data de entrega"
        onChange={onChange}
        value={form.deliveryDate}
      />
      <style.Button>Finalizar compra</style.Button>
    </style.Form>
  );
};

export default SideBarForm;
