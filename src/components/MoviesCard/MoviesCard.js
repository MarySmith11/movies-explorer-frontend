import React from 'react';
import { FILMS_IMAGES_DOMAIN } from '../../utils/constants';

import './MoviesCard.css';

function MoviesCard(props) {
  const buttonTitle = props.film.saved ? '' : 'Сохранить';
  const buttonClass = props.film.saved ? 'movies__button movies__button_state_active' : 'movies__button';
  const imageDomain = props.savedSample ? '' : FILMS_IMAGES_DOMAIN;
  const imageLink = !props.film.image.url ? `${imageDomain}${props.film.image}` : `${imageDomain}${props.film.image.url}`;

  function handleClick() {
    if (props.film.saved) {
      props.handleDelete(props.film);
    } else if (!props.savedTemplate) {
      props.onFilmLike(props.film);
    }
  }

  // длительность фильма
  function getTimeFromMins(mins) {
    let timeString = '';
    if (mins >= 60) {
      timeString += `${Math.floor(mins / 60)}ч `;
    }

    const minutes = mins % 60;
    if (minutes > 0) {
      timeString += `${minutes}м `;
    }
    return timeString;
  }

  return (
    <article className='movies__movie'>
      <a className='movies__trailer-link' href={props.film.trailerLink} target='blank'>
        <img className='movies__poster' src={imageLink} alt={props.film.nameRU} />
        <div className='movies__header'>
          <h2 className='movies__title'>{props.film.nameRU}</h2>
          <p className='movies__time'>{getTimeFromMins(props.film.duration)}</p>
        </div>
      </a>
      {props.savedSample ? <button className='movies__button movies__button_type_remove' type='button' onClick={handleClick}></button> : <button className={buttonClass} onClick={handleClick} type='button'>{buttonTitle}</button>}
    </article>
  );
}

export default MoviesCard;
