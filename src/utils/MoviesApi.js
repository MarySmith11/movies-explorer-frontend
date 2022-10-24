import { FILMS_API_URL, MOVIES_ERRORS } from './constants';

const getFilmList = () => fetch(`${FILMS_API_URL}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.status !== 200 && MOVIES_ERRORS[response.status]) {
      throw new Error(MOVIES_ERRORS[response.status]);
    } else if (response.status !== 200) {
      throw new Error(MOVIES_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(MOVIES_ERRORS.default);
    }
  })
  .then((res) => res).catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export default getFilmList;
