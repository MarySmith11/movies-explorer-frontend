import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import Form from '../Form/Form';

function Login() {
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('');

  return (
    <FormContainer title='Рады видеть!' bottomLinkTitle='Регистрация' buttonText='Войти' bottomLink='/signup' bottomInfo='Ещё не зарегистрированы?'>
      <Form title='E-mail' name='email' type='email' required={true} placeholder='default@yandex.ru' value={email} onChange={setEmail} />
      <Form title='Пароль' name='password' type='password' required={true} placeholder='******' error={true} value={password} onChange={setPassword} />
    </FormContainer>
  );
}

export default Login;
