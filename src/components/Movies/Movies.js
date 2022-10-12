import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardListPagination from '../MoviesCardListPagination/MoviesCardListPagination';
import { movieCardList } from '../../utils/textContent';
import './Movies.css';

function Movies() {
  return (
    <section className='film-container'>
      <SearchForm />
      <MoviesCardList films={movieCardList} />
      <MoviesCardListPagination />
      <Preloader />
    </section>
  );
}

export default Movies;
