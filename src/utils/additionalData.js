import {
  MEDIUM_WINDOW_RESOLUTION,
  MIN_WINDOW_RESOLUTION,
  MAX_RESOLUTION_LOAD_MORE,
  MAX_RESOLUTION_PAGE_ELEMENT_COUNT,
  MEDIUM_RESOLUTION_LOAD_MORE,
  MEDIUM_RESOLUTION_PAGE_ELEMENT_COUNT,
  MIN_RESOLUTION_LOAD_MORE,
  MIN_RESOLUTION_PAGE_ELEMENT_COUNT,
} from './constants';

export function predictPageElementCount(setPageCount, setMoreCount) {
  const windowWidth = window.innerWidth;
  if (windowWidth >= MEDIUM_WINDOW_RESOLUTION) {
    setPageCount(MAX_RESOLUTION_PAGE_ELEMENT_COUNT);
    setMoreCount(MAX_RESOLUTION_LOAD_MORE);
  } else if (windowWidth >= MIN_WINDOW_RESOLUTION) {
    setPageCount(MEDIUM_RESOLUTION_PAGE_ELEMENT_COUNT);
    setMoreCount(MEDIUM_RESOLUTION_LOAD_MORE);
  } else if (windowWidth < MIN_WINDOW_RESOLUTION) {
    setPageCount(MIN_RESOLUTION_PAGE_ELEMENT_COUNT);
    setMoreCount(MIN_RESOLUTION_LOAD_MORE);
  }
}

// сохранение фильма в localStorage
export function addSavedFilmToStorage(film, setState) {
  const savedFilmList = localStorage.getItem('saved-films');
  if (savedFilmList) {
    const newSavedFilms = JSON.parse(savedFilmList);
    newSavedFilms.push({ ...film, saved: true });
    localStorage.setItem('saved-films', JSON.stringify(newSavedFilms));
    setState(newSavedFilms);
  }
}

// удаление фильма из localStorage */
export function removeSavedFilmFromStorage(film, setState) {
  const savedFilmList = localStorage.getItem('saved-films');
  if (savedFilmList) {
    const newSavedFilms = JSON.parse(savedFilmList).filter((c) => c.movieId !== film.movieId);
    localStorage.setItem('saved-films', JSON.stringify(newSavedFilms));
    setState(newSavedFilms);
  }
}
