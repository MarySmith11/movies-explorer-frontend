import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardListPagination from '../MoviesCardListPagination/MoviesCardListPagination';
import { predictPageElementCount } from '../../utils/additionalData';
import { loadFilterFromStorage, saveFilterToStorage } from '../../utils/filterUtils';
import './Movies.css';

function Movies(props) {
  const [films, setFilms] = React.useState([]);
  const [savedFilms, setSavedFilms] = React.useState([]);
  const [showPagination, setShowPagination] = React.useState(false);
  const [loadMoreCount, setLoadMoreCount] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);
  const [makeRequest, doMakeRequest] = React.useState(0);

  const [searchString, setSearchString] = React.useState('');
  const [isShortSearch, setIsShortSearch] = React.useState(false);

  React.useEffect(
    () => {
      const updatedSaveFlagFilms = (films && films.map((item) => {
        const newItem = item;
        const savedItemCopy = savedFilms.find((savedItem) => savedItem.movieId === item.id);
        if (savedItemCopy) {
          newItem.saved = true;
          newItem._id = savedItemCopy._id;
        } else {
          newItem.saved = false;
          newItem._id = null;
        }
        return newItem;
      })) || [];
      setFilms([...updatedSaveFlagFilms]);
    },
    [makeRequest, savedFilms, films],
  );

  // сабмит формы фильтра
  function handleSearch(phraseFilter, isShortFilter) {
    if (!props.formatter.allFilms || props.formatter.allFilms.length <= 0) {
      props.getFilmRequest(
        (allFilmList) => {
          doMakeRequest();
          if (allFilmList) {
            props.formatter.setAllFilms(allFilmList);
            const formatterResult = props.formatter.processFilter(
              phraseFilter,
              isShortFilter,
              pageCount,
            );
            saveFilterToStorage({
              phraseFilter,
              isShortFilter,
            });
            setFilms(formatterResult.films);
            setShowPagination(formatterResult.showPagination);
          } else {
            setFilms([]);
          }
        },
      );
    } else {
      const formatterResult = props.formatter.processFilter(
        phraseFilter,
        isShortFilter,
        pageCount,
      );
      saveFilterToStorage({
        phraseFilter,
        isShortFilter,
      });
      setFilms(formatterResult.films);
      setShowPagination(formatterResult.showPagination);
      doMakeRequest();
    }
  }

  React.useEffect(
    () => {
      predictPageElementCount(setPageCount, setLoadMoreCount);
      const savedFilter = loadFilterFromStorage();
      if (savedFilter && (savedFilter.phraseFilter || savedFilter.isShortFilter)) {
        setSearchString(savedFilter.phraseFilter);
        setIsShortSearch(savedFilter.isShortFilter);
        handleSearch(savedFilter.phraseFilter, savedFilter.isShortFilter);
      }
      props.onMount(setSavedFilms);
    },
    [],
  );

  // подгрузка карточек
  function loadMore() {
    const formatterResult = props.formatter.processLoadMore(
      films,
      loadMoreCount,
    );
    setFilms(formatterResult.films);
    setShowPagination(formatterResult.showPagination);
    doMakeRequest();
  }

  // смена количества отображения и подгрузки карточек
  function callResizeEventHandler() {
    props.formatter.windowResizeEventHandler({
      setPageCount, setLoadMoreCount,
    });
  }
  window.addEventListener('resize', callResizeEventHandler);

  function handleDelete(card) {
    props.handleFilmDelete(card, setSavedFilms, doMakeRequest);
  }

  function handleLike(card) {
    props.handleFilmLike(card, setSavedFilms, doMakeRequest);
  }

  return (
    <section className='film-container'>
      <SearchForm handleSearch={handleSearch} isShort={isShortSearch} phrase={searchString} />
      <MoviesCardList films={films} errorText={props.errorText}
        handleDelete={handleDelete} onFilmLike={handleLike} />
      <MoviesCardListPagination show={showPagination} onClick={loadMore}/>
      <Preloader show={props.isPendingRequest} />
    </section>
  );
}

export default Movies;
