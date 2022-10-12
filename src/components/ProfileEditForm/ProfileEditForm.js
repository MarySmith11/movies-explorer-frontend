import React from 'react';
import FormError from '../FormError/FormError';
import './ProfileEditForm.css';

function ProfileEditForm(props) {
  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [apiErrorText, setApiErrorText] = React.useState('');
  const [isSaveDisabled, setIsSaveDisabled] = React.useState(true);

  function handleNameChange(e) {
    setApiErrorText('');
    setName(e.target.value);
    setIsSaveDisabled(false);
  }

  function handleEmailChange(e) {
    setApiErrorText('');
    setEmail(e.target.value);
    setIsSaveDisabled(false);
  }

  function enableEditMode() {
    setIsEditMode(true);
  }

  function submitHandler(e) {
    props.submitHandler(e);
    setIsSaveDisabled(true);
    setApiErrorText('Произошла ошибка при обновлении профиля');
  }

  return (
    <form className='profile__form' onSubmit={submitHandler} action='#' encType='multipart/form-data' method='POST'>
      <fieldset className='profile__field-wrap'>
        <label className='profile__field-name'>Имя</label>
        <input type='text' name='name' className='profile__field-input' value={name} onChange={handleNameChange} disabled={!isEditMode} placeholder='Имя пользователя' required />
      </fieldset>
      <fieldset className='profile__field-wrap'>
        <label className='profile__field-name'>E-mail</label>
        <input type='email' name='name' className='profile__field-input' value={email} onChange={handleEmailChange} disabled={!isEditMode} placeholder='pochta@yandex.ru' required />
      </fieldset>
      {
        isEditMode ? <div className='profile__form-footer'><FormError text={apiErrorText} /><button type='submit' className={`profile__form-submit ${isSaveDisabled ? 'profile__form-submit_state_disabled' : ''}`} disabled={isSaveDisabled}>Сохранить</button></div>
          : <div className='profile__form-footer'><FormError text={apiErrorText} /><button type='button' className='profile__form-edit' onClick={enableEditMode}>Редактировать</button>
            <button type='button' className='profile__logout'>Выйти из аккаунта</button></div>
      }
    </form>
  );
}

export default ProfileEditForm;
