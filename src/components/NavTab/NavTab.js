import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav>
      <ul className='nav-tab'>
        <li className='nav-tab__list'>
          <a href='#about' className='nav-tab__link'>О проекте</a>
        </li>
        <li className='nav-tab__list'>
          <a href='#techs' className='nav-tab__link'>Технологии</a>
        </li>
        <li className='nav-tab__list'>
          <a href='#about-me' className='nav-tab__link'>Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
