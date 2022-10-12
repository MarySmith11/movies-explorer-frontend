import React from 'react';
import { NavLink } from 'react-router-dom';
import './PersonalMenu.css';

function PersonalMenu(props) {
  if (props.loggedIn) {
    return (
      <nav className='navbar__menu navbar__menu_type_profile'>
        <NavLink className='navbar__personal-item navbar__personal-item_type_profile' to='/profile'>Аккаунт</NavLink>
      </nav>
    );
  }
  return (
    <div className='navbar__menu'>
      <NavLink className='navbar__personal-item' to='/signup'>Регистрация</NavLink>
      <NavLink className='navbar__personal-item navbar__personal-item_type_login' to='/signin'>Войти</NavLink>
    </div>
  );
}

export default PersonalMenu;
