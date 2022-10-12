import React from 'react';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import './Profile.css';

function Profile() {
  const userName = 'Виталий';
  const userEmail = 'pochta@yandex.ru';

  const profileFormSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main className='profile'>
      <h1 className='profile__name'>{`Привет, ${userName}!`}</h1>
      <ProfileEditForm name={userName} email={userEmail} submitHandler={profileFormSubmitHandler}/>
    </main>
  );
}

export default Profile;
