import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import Form from '../Form/Form';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('12345678901234');

  return (
    <FormContainer title='Добро пожаловать!' buttonText='Зарегистрироваться' bottomInfo='Уже зарегистрированы?' bottomLink='/signin' bottomLinkTitle='Войти' errorText='Что-то пошло не так...'>
      <Form title='Имя' name='name' type='text' required={true} placeholder='Виталий' value={name} onChange={setName} />
      <Form title='E-mail' name='email' type='email' required={true} placeholder='pochta@yandex.ru' value={email} onChange={setEmail} />
      <Form title='Пароль' name='password' type='password' required={true} placeholder='**************' error={true} value={password} onChange={setPassword} />
    </FormContainer>
  );
}

export default Register;
