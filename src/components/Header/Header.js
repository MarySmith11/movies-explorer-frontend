import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const toggleMobileMenu = () => {
    const mobileNavBar = document.querySelector('.navbar_type_authorized');
    setMobileMenu(!mobileMenu);
    if (mobileNavBar) {
      mobileNavBar.classList.toggle('navbar_state_visible');
    }
  };

  if (props.showFull) {
    return (
      <header className='header'>
        <NavLink className='header__logo' to='/'>
          <img src={logo} alt='лого' />
        </NavLink>
        <div className={`header__menu-overlay ${mobileMenu ? 'header__menu-overlay_state_visible' : ''}`} onClick={toggleMobileMenu}></div>
        {props.loggedIn ? <div className='header__menu'><Navigation loggedIn={props.loggedIn} isMainPage={props.isMainPage} closeMenuHandler={toggleMobileMenu} /></div> : <Navigation loggedIn={props.loggedIn} isMainPage={props.isMainPage} closeMenuHandler={toggleMobileMenu} />}
        {props.loggedIn ? <button className='header__menu-button' type='button' onClick={toggleMobileMenu}></button> : ''}
      </header>
    );
  }
  return null;
}

export default Header;
