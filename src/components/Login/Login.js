import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import Form from '../Form/Form';
import UseFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';

function Login(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = UseFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    props.onLogin(email, password);
  }

  return (
    <FormContainer title='Рады видеть!' bottomLinkTitle='Регистрация' valid={isValid} buttonText='Войти' bottomLink='/signup' bottomInfo='Ещё не зарегистрированы?' errorText={props.apiError} onSubmit={handleSubmit}>
      <Form title='E-mail' name='email' type='email' required={true} placeholder='default@yandex.ru' value={values.email || ''} onChange={handleChange} disabled={props.disableInputs} pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}' errorText={errors.email}/>
      <Form title='Пароль' name='password' minLength="8" type='password' required={true} placeholder='******' error={true} value={values.password || ''} onChange={handleChange} disabled={props.disableInputs} errorText={errors.password}/>
    </FormContainer>
  );
}

export default Login;
