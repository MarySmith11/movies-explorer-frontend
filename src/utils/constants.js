export const HEADER_FULL_PATH_LIST = [
  '/',
  '/movies',
  '/profile',
  '/saved-movies',
];

export const FOOTER_FULL_PATH_LIST = [
  '/',
  '/movies',
  '/saved-movies',
];
export const MAIN_API_BASE_URL = 'http://localhost:5000';
export const FILMS_IMAGES_DOMAIN = 'https://api.nomoreparties.co';
export const FILMS_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const REGISTER_ERRORS = {
  404: 'Страница не найдена',
  409: 'Пользователь уже существует с таким email',
  500: 'Произошла ошибка на сервере',
  default: 'Произошла ошибка при регистрации пользователя',
};
export const LOGIN_ERRORS = {
  401: 'Неверный логин или пароль',
  404: 'Страница не найдена',
  500: 'Произошла ошибка на сервере',
  default: 'Произошла ошибка при авторизации ',
};
export const LOGOUT_ERRORS = {
  404: 'Страница не найдена',
  500: 'Произошла ошибка на сервере',
  default: 'Произошла ошибка при выходе из профиля пользователя',
};
export const PROFILE_ERRORS = {
  404: 'Страница не найдена',
  409: 'Пользователь уже существует с таким email',
  500: 'Произошла ошибка на сервере',
  default: 'Произошла ошибка при обновлении профиля',
};
export const MOVIES_ERRORS = {
  400: 'Ошибка при передаче некорректных данных для сохранения фильма',
  404: 'Страница не найдена',
  default: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};
export const SHORT_MAX_FILM_DURATION = 40;
export const MEDIUM_WINDOW_RESOLUTION = 768;
export const MIN_WINDOW_RESOLUTION = 480;
export const MAX_RESOLUTION_PAGE_ELEMENT_COUNT = 12;
export const MAX_RESOLUTION_LOAD_MORE = 3;
export const MEDIUM_RESOLUTION_PAGE_ELEMENT_COUNT = 8;
export const MEDIUM_RESOLUTION_LOAD_MORE = 2;
export const MIN_RESOLUTION_PAGE_ELEMENT_COUNT = 5;
export const MIN_RESOLUTION_LOAD_MORE = 1;
