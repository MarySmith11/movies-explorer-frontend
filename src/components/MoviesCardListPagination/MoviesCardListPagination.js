import React from 'react';
import './MoviesCardListPagination.css';

function MoviesCardListPagination(props) {
  if (props.show) {
    return (
      <section className='movies__pagination-wrap'>
        <button type='button' onClick={props.onClick} className='movies__pagination-button'>Ещё</button>
      </section>
    );
  }
  return null;
}

export default MoviesCardListPagination;
