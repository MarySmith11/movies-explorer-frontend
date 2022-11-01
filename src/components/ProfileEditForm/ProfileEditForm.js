import React from 'react';
import FormError from '../FormError/FormError';
import ActiveUserContext from '../../user-contexts/CurrentUserContext';
import UseFormWithValidation from '../UseFormWithValidation/UseFormWithValidation';
import './ProfileEditForm.css';

function ProfileEditForm(props) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  /*  Отключение сохранения до изменения данных формы */
  const [isSaveDisabled, setIsSaveDisabled] = React.useState(true);
  const [nameChanged, setIsNameChanged] = React.useState(false);
  const [emailChanged, setIsEmailChanged] = React.useState(false);

  const currentUser = React.useContext(ActiveUserContext);

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = UseFormWithValidation({ name: currentUser.name, email: currentUser.email });

  function inputChangeHandler(e) {
    handleChange(e);
    if (e.target.name === 'email') {
      setIsEmailChanged(e.target.value !== currentUser.email);
    } else if (e.target.name === 'name') {
      setIsNameChanged(e.target.value !== currentUser.name);
    }
  }

  React.useEffect(() => {
    setIsSaveDisabled((!nameChanged && !emailChanged) || !isEditMode);
  }, [nameChanged, emailChanged]);

  function enableEditMode() {
    setIsEditMode(true);
    setIsEmailChanged(false);
    setIsNameChanged(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;
    props.submitHandler(name, email, () => { setIsSaveDisabled(true); setIsEditMode(false); });
  }

  return (
    <form className='profile__form' onSubmit={handleSubmit} action='#' encType='multipart/form-data' method='POST' noValidate>
      <fieldset className='profile__field-wrap'>
        <label className='profile__field-name'>Имя</label>
        <input type='text' name='name' className='profile__field-input' value={values.name} onChange={inputChangeHandler} disabled={!isEditMode} placeholder='Имя пользователя' required pattern='^[а-яА-ЯёЁa-zA-Z- ]+$' />
        <p className={`form-error ${errors.name ? '' : 'form-error_state_hidden'}`}>{errors.name}</p>
      </fieldset>
      <fieldset className='profile__field-wrap'>
        <label className='profile__field-name'>E-mail</label>
        <input type='email' name='email' className='profile__field-input' value={values.email} onChange={inputChangeHandler} disabled={!isEditMode} placeholder='pochta@yandex.ru' required pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}'/>
        <p className={`form-error ${errors.email ? '' : 'form-error_state_hidden'}`}>{errors.email}</p>
      </fieldset>
      {
        isEditMode ? <div className='profile__form-footer'><FormError text={props.apiErrorText} /><button type='submit' className={`profile__form-submit ${isSaveDisabled || !isValid ? 'profile__form-submit_state_disabled' : ''}`} disabled={isSaveDisabled}>Сохранить</button></div>
          : <div className='profile__form-footer'><FormError text={props.apiErrorText} /><button type='button' className='profile__form-edit' onClick={enableEditMode}>Редактировать</button>
            <button type='button' className='profile__logout' onClick={props.handleLogout}>Выйти из аккаунта</button></div>
      }
    </form>
  );
}

export default ProfileEditForm;
