import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const errorText = props.errorText ? props.errorText : 'Ничего не найдено';
  if (props.films !== null) {
    return (
      <section className='movies'>
        {props.films.map((film, i) => (
          <MoviesCard key={i} film={film} savedSample={props.saved} onFilmLike={props.onFilmLike}
            handleDelete={props.handleDelete} />
        ))}
      </section>
    );
  }

  return (<p className="movies-not-found">{errorText}</p>);
}

export default MoviesCardList;
