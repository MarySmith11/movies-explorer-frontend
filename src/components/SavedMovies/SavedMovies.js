import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies(props) {
  const [films, setFilms] = React.useState([]);
  const [filteredFilms, setFilteredFilms] = React.useState([]);
  const [isFilterRequest, setIsFilterRequest] = React.useState(false);

  React.useEffect(() => { props.onMount(setFilms); }, []);

  function handleSearch(phraseFilter, isShortFilter) {
    if (!props.formatter.savedFilms || props.formatter.savedFilms.length <= 0) {
      props.formatter.setAllFilms(films);
      setIsFilterRequest(phraseFilter || isShortFilter);
      const formatterResult = props.formatter.processFilter(
        phraseFilter,
        isShortFilter,
      );
      setFilteredFilms(formatterResult.films);
    } else {
      setIsFilterRequest(phraseFilter || isShortFilter);
      const formatterResult = props.formatter.processFilter(
        phraseFilter,
        isShortFilter,
      );
      setFilteredFilms(formatterResult.films);
    }
  }

  function handleDelete(card) {
    props.handleFilmDelete(card, setFilms);
  }
  return (
    <main className='saved-movies'>
      <SearchForm handleSearch={handleSearch} />
      <MoviesCardList films={(!filteredFilms || !filteredFilms.length)
        && !isFilterRequest ? films : filteredFilms} handleDelete={handleDelete} saved={true} />
    </main>
  );
}

export default SavedMovies;
