import React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import Form from '../Form/Form';
import UseFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';

function Register(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = UseFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    props.onRegister(name, email, password, resetForm);
  }

  return (
    <FormContainer title='Добро пожаловать!' buttonText='Зарегистрироваться' bottomInfo='Уже зарегистрированы?' bottomLink='/signin' bottomLinkTitle='Войти' valid={isValid} errorText={props.apiError} onSubmit={handleSubmit}>
      <Form title='Имя' name='name' type='text' required={true} placeholder='Виталий' value={values.name || ''} errorText={errors.name} onChange={handleChange} pattern='^[а-яА-ЯёЁa-zA-Z- ]+$' disabled={props.disableInputs} />
      <Form title='E-mail' name='email' type='email' required={true} placeholder='pochta@yandex.ru' value={values.email || ''} onChange={handleChange} errorText={errors.email} pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}' disabled={props.disableInputs}/>
      <Form title='Пароль' name='password' type='password' minLength='8' required={true} placeholder='**************' value={values.password || ''} onChange={handleChange} errorText={errors.password} disabled={props.disableInputs}/>
    </FormContainer>
  );
}

export default Register;
