import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContentMenu.css';

function ContentMenu(props) {
  if (props.loggedIn) {
    return (
      <nav className='navbar__menu navbar__menu_type_authorized'>
        <NavLink className='navbar__menu-item navbar__menu-item_type_mobile' activeClassName='navbar__menu-item_state_active' exact to='/'>Главная</NavLink>
        <NavLink className='navbar__menu-item' activeClassName='navbar__menu-item_state_active' to='/movies'>Фильмы</NavLink>
        <NavLink className='navbar__menu-item' activeClassName='navbar__menu-item_state_active' to='/saved-movies'>Сохраненные фильмы</NavLink>
      </nav>
    );
  }
  return null;
}

export default ContentMenu;
