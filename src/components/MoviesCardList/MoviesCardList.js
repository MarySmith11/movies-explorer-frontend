import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(prop) {
  return (
    <section className='movies'>
      {prop.films.map((film, i) => (
        <MoviesCard key={i} film={film} savedSapmple={prop.saved} />
      ))}
    </section>
  );
}

export default MoviesCardList;
