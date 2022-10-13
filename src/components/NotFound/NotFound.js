import React from 'react';
import './NotFound.css';

function NotFound(props) {
  return (
    <section className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__description'>Страница не найдена</p>
      </div>
      <button className='not-found__back-link' type='button' onClick={props.backNavigationHandler}>Назад</button>
    </section>
  );
}

export default NotFound;
