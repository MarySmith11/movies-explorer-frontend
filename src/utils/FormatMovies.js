import { SHORT_MAX_FILM_DURATION } from './constants';
import { predictPageElementCount } from './additionalData';

export default class FormatMovies {
  constructor() {
    this.lastFilteredResult = [];
    this.allFilms = [];
    this.resizeTimeout = null;
  }

  setAllFilms(allFilms) {
    this.allFilms = allFilms;
  }

  /* обработка фильтра */
  processFilter(phrase, isShort, pageElementCount) {
    if (this.allFilms) {
      /* фильтрация с учётом чебокса короткометражек и по англ и ру наименованию фильмов */
      this.lastFilteredResult = this.allFilms.filter(
        (film) => (!isShort || (isShort && film.duration <= SHORT_MAX_FILM_DURATION))
          && (!phrase
            || (((phrase && film.nameRU
              && film.nameRU.toLowerCase().includes(phrase.toLowerCase())))
              || (phrase && film.nameEN
                && film.nameEN.toLowerCase().includes(phrase.toLowerCase())))),
      );
      if (this.lastFilteredResult.length) {
        return {
          films: (pageElementCount && this.lastFilteredResult.length > pageElementCount)
            ? this.lastFilteredResult.splice(0, pageElementCount)
            : this.lastFilteredResult,
          showPagination: pageElementCount && this.lastFilteredResult.length > pageElementCount,
        };
      }
    }
    return {
      films: null,
      showPagination: false,
    };
  }

  processLoadMore(currentFilmResult, loadMoreCount) {
    if (this.lastFilteredResult.length && currentFilmResult) {
      if (this.lastFilteredResult[0]) {
        const films = currentFilmResult.concat(
          this.lastFilteredResult.splice(0, loadMoreCount),
        );
        return {
          films,
          showPagination: this.lastFilteredResult.length > 0,
        };
      }
    }
    return {};
  }

  windowResizeEventHandler({
    setPageCount, setLoadMoreCount,
  }) {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(
      () => {
        predictPageElementCount(setPageCount, setLoadMoreCount);
      },
      500,
    );
  }
}
