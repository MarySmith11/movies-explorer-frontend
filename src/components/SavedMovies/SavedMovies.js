import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/textContent';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList films={savedMovies} saved={true} />
    </main>
  );
}

export default SavedMovies;
