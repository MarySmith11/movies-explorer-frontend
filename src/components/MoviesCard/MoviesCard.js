import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const buttonTitle = props.film.saved ? '' : 'Сохранить';
  const buttonClass = props.film.saved ? 'movies__button movies__button_state_active' : 'movies__button';

  return (
    <article className='movies__movie'>
      <img className='movies__poster' src={props.film.picture} alt={props.film.title} />
      <div className='movies__header'>
        <h2 className='movies__title'>{props.film.title}</h2>
        <p className='movies__time'>{props.film.time}</p>
      </div>
      {props.savedSample ? <button className='movies__button movies__button_type_remove' type='button'></button> : <button className={buttonClass} type='button'>{buttonTitle}</button>}
    </article>
  );
}

export default MoviesCard;
