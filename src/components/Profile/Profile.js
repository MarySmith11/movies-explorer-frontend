import React from 'react';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import ActiveUserContext from '../../user-contexts/CurrentUserContext';
import './Profile.css';

function Profile(props) {
  const currentUser = React.useContext(ActiveUserContext);

  return (
    <main className='profile'>
      <h1 className='profile__name'>{`Привет, ${currentUser.name}!`}</h1>
      <ProfileEditForm apiErrorText={props.apiError}
        handleLogout={props.handleLogout} submitHandler={props.submitHandler} />
    </main>
  );
}

export default Profile;
