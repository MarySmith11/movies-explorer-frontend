import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  withRouter,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../user-contexts/CurrentUserContext';
import { HEADER_FULL_PATH_LIST, FOOTER_FULL_PATH_LIST, FILMS_IMAGES_DOMAIN } from '../../utils/constants';
import * as mainApiMethods from '../../utils/MainApi';
import getFilmList from '../../utils/MoviesApi';
import FormatMovies from '../../utils/FormatMovies';
import { addSavedFilmToStorage, removeSavedFilmFromStorage, removeAllFilmsFromStorage } from '../../utils/additionalData';
import { removeFilterFromStorage } from '../../utils/filterUtils';
import './App.css';

function App() {
  const history = useHistory();

  // возврат на предыдущую страницу
  const goToBackPage = () => {
    history.goBack();
  };

  // стейты
  const [isMainPage, setIsMainPage] = React.useState(history.location.pathname === '/');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [tokenChecked, setTokenChecked] = React.useState(false);
  const [isHeaderFull, setIsHeaderFull] = React.useState(
    HEADER_FULL_PATH_LIST.includes(history.location.pathname),
  );
  const [isFooterFull, setIsFooterFull] = React.useState(
    FOOTER_FULL_PATH_LIST.includes(history.location.pathname),
  );
  const [apiError, setApiError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isPendingFilmRequest, setIsPendingFilmRequest] = React.useState(false);

  // отслеживание перемещений по страницам
  const handleRouteChange = () => {
    setIsMainPage(history.location.pathname === '/');
    setIsHeaderFull(HEADER_FULL_PATH_LIST.includes(history.location.pathname));
    setIsFooterFull(FOOTER_FULL_PATH_LIST.includes(history.location.pathname));
    setApiError('');
  };

  const movieListFormatter = new FormatMovies();

  const handleTokenCheck = () => {
    mainApiMethods.checkToken()
      .then((res) => {
        if (res.data) {
          if (res.data.email) {
            setCurrentUser(res.data);
          }

          setLoggedIn(true);
          setTokenChecked(true);
          //  переход на /movies при регистрации/авторизации
          if (history.location.pathname === '/signup' || history.location.pathname === '/signin') {
            history.push('/movies');
          }
        } else {
          setLoggedIn(false);
          setTokenChecked(true);
        }
      })
      .catch((err) => err);
  };

  React.useEffect(() => {
    handleTokenCheck();
    handleRouteChange();
  }, [history.location.pathname]);

  //  отключение инпутов при отправке запросов
  const [disabledInputs, setDisabledInputs] = React.useState(false);

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    setDisabledInputs(true);
    mainApiMethods.login(email, password)
      .then((result) => {
        setDisabledInputs(false);
        if (result.error) {
          setApiError(result.error);
        } else {
          history.push('/movies');
        }
      })
      .catch((err) => {
        setDisabledInputs(false);
        setApiError(err.message);
      });
  };

  const handleFilmLike = (film, updateSavedFilms, reRenderAction) => {
    const formattedFilm = {
      movieId: film.id,
      director: film.director,
      duration: film.duration,
      country: film.country,
      year: film.year,
      description: film.description,
      trailerLink: film.trailerLink,
      image: `${FILMS_IMAGES_DOMAIN}${film.image.url ? film.image.url : ''}`,
      nameRU: film.nameRU,
      thumbnail: `${FILMS_IMAGES_DOMAIN}${film.image.previewUrl ? film.image.previewUrl : film.image.url}`,
    };
    if (film.trailer) {
      formattedFilm.trailer = film.trailerLink;
    }
    if (film.image.formats.thumbnail) {
      formattedFilm.thumbnail = `${FILMS_IMAGES_DOMAIN}${film.image.formats.thumbnail.url}`;
    }
    if (film.county) {
      formattedFilm.country = film.country;
    }
    if (film.nameEN) {
      formattedFilm.nameEN = film.nameEN;
    }
    mainApiMethods.saveFilm(formattedFilm)
      .then((result) => {
        if (!result.error && result.data) {
          addSavedFilmToStorage(result.data, updateSavedFilms);
          reRenderAction();
        }
      })
      .catch((err) => err);
  };

  const handleFilmDelete = (film, updateSavedFilms, reRenderAction) => {
    mainApiMethods.removeFilm(film._id)
      .then((result) => {
        if (!result.error && result.data) {
          removeSavedFilmFromStorage(result.data, updateSavedFilms);
          reRenderAction();
        }
      })
      .catch((err) => err);
  };

  const getSavedFilmsRequest = (setFilmState) => {
    const savedFilmList = localStorage.getItem('saved-films');
    if (!savedFilmList) {
      mainApiMethods.getSavedFilmList()
        .then((result) => {
          if (result.error && !result) {
            setApiError(result.error);
          } else {
            localStorage.setItem('saved-films', JSON.stringify(result));
            setFilmState(result);
          }
        })
        .catch((err) => err);
    } else {
      const savedFilmListDecoded = JSON.parse(savedFilmList);
      setFilmState([...savedFilmListDecoded]);
    }
  };

  const getAllFilmsRequest = (setFilmState) => {
    const localFilmList = localStorage.getItem('films');
    if (!localFilmList) {
      setIsPendingFilmRequest(true);
      getFilmList()
        .then((result) => {
          setIsPendingFilmRequest(false);
          if (result.error) {
            setApiError(result.error);
          } else {
            const remoteFilmList = result;
            localStorage.setItem('films', JSON.stringify(remoteFilmList));
            setFilmState(remoteFilmList);
          }
        })
        .catch(() => {
          setIsPendingFilmRequest(false);
        });
    }
    const filmListDecoded = JSON.parse(localFilmList);
    setFilmState(filmListDecoded);
  };

  const handleRegister = (email, password, name, onSuccess) => {
    if (!email || !password || !name) {
      return;
    }
    setDisabledInputs(true);
    mainApiMethods.register(email, password, name, onSuccess)
      .then((result) => {
        setDisabledInputs(false);
        if (result.error) {
          setApiError(result.error);
        } else if (result.data && result.data.email) {
          setApiError('');
          history.push('/movies');
        }
      })
      .catch((err) => {
        setDisabledInputs(false);
        setApiError(err.message);
      });
  };

  const handleUpdateProfile = (name, email, onSuccess = null) => {
    if (!email || !name) {
      return;
    }
    setDisabledInputs(true);
    mainApiMethods.updateUserProfile(name, email)
      .then((result) => {
        setDisabledInputs(false);
        if (result.error) {
          setApiError(result.error);
        } else if (result.data && result.data.email) {
          setApiError('');
          setCurrentUser(result.data);
          if (onSuccess) {
            onSuccess();
          }
        }
      })
      .catch((err) => {
        setDisabledInputs(false);
        setApiError(err.message);
      });
  };

  const handleLogout = () => {
    mainApiMethods.logout()
      .then((result) => {
        if (!result.error) {
          removeFilterFromStorage();
          removeAllFilmsFromStorage();
          history.push('/');
        }
      })
      .catch((err) => err);
  };

  return (
    tokenChecked && <CurrentUserContext.Provider value={currentUser}>
      <div className='content'>
        <Header loggedIn={loggedIn} isMainPage={isMainPage} showFull={isHeaderFull} />
        <Switch >
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} apiError={apiError} disableInputs={disabledInputs} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} apiError={apiError}
              disableInputs={disabledInputs} />
          </Route>
          <ProtectedRoute loggedIn={loggedIn} path='/movies' component={Movies} formatter={movieListFormatter} getFilmRequest={getAllFilmsRequest}
            errorText={apiError} isPendingRequest={isPendingFilmRequest}
            handleFilmLike={handleFilmLike} onMount={getSavedFilmsRequest}
            handleFilmDelete={handleFilmDelete} />
          <ProtectedRoute loggedIn={loggedIn} path='/saved-movies' component={SavedMovies} onMount={getSavedFilmsRequest}
            formatter={movieListFormatter} handleFilmDelete={handleFilmDelete} />
          <ProtectedRoute loggedIn={loggedIn} path='/profile' component={Profile} submitHandler={handleUpdateProfile} handleLogout={handleLogout} apiError={apiError} />
          <Route>
            <NotFound backNavigationHandler={goToBackPage} />
          </Route>
        </Switch>
        <Footer showFull={isFooterFull} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
