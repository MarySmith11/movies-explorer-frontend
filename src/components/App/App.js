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
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { headerFullPathList, footerFullPathList } from '../../utils/constants';
import './App.css';

function App() {
  const history = useHistory();

  const goToBackPage = () => {
    history.goBack();
  };

  const [isMainPage, setIsMainPage] = React.useState(history.location.pathname === '/');
  const [loggedIn, setIsLoggedIn] = React.useState(history.location.pathname === '/movies' || history.location.pathname === '/profile' || history.location.pathname === '/saved-movies' || history.location.pathname);
  const [isHeaderFull, setIsHeaderFull] = React.useState(
    headerFullPathList.includes(history.location.pathname),
  );
  const [isFooterFull, setIsFooterFull] = React.useState(
    footerFullPathList.includes(history.location.pathname),
  );

  const handleRouteChange = () => {
    setIsMainPage(history.location.pathname === '/');
    setIsHeaderFull(headerFullPathList.includes(history.location.pathname));
    setIsFooterFull(footerFullPathList.includes(history.location.pathname));
    setIsLoggedIn(history.location.pathname === '/movies' || history.location.pathname === '/profile' || history.location.pathname === '/saved-movies');
  };

  React.useEffect(() => {
    handleRouteChange();
  }, [history.location.pathname]);

  return (
    <div className='content'>
      <Header loggedIn={loggedIn} isMainPage={isMainPage} showFull={isHeaderFull} />
      <Switch >
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route>
          <NotFound backNavigationHandler={goToBackPage} />
        </Route>
      </Switch>
      <Footer showFull={isFooterFull} />
    </div>
  );
}

export default withRouter(App);
