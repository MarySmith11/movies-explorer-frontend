import * as constants from './constants';

export const register = (name, email, password) => fetch(`${constants.MAIN_API_BASE_URL}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ name, email, password }),
})
  .then((response) => {
    if (response.status !== 201 && constants.REGISTER_ERRORS[response.status]) {
      throw new Error(constants.REGISTER_ERRORS[response.status]);
    } else if (response.status !== 201) {
      throw new Error(constants.REGISTER_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.REGISTER_ERRORS.default);
    }
  })
  .then((res) => res).catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const login = (email, password) => fetch(`${constants.MAIN_API_BASE_URL}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
})
  .then((response) => {
    if (response.status !== 200 && constants.LOGIN_ERRORS[response.status]) {
      throw new Error(constants.LOGIN_ERRORS[response.status]);
    } else if (response.status !== 200) {
      throw new Error(constants.LOGIN_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.LOGIN_ERRORS.default);
    }
  })
  .then((res) => {
    if (!res.token) {
      throw new Error(constants.LOGIN_ERRORS.default);
    } else {
      return res;
    }
  }).catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const checkToken = () => fetch(`${constants.MAIN_API_BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(constants.LOGIN_ERRORS.default);
  })
  .then((data) => data)
  .catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const logout = () => fetch(`${constants.MAIN_API_BASE_URL}/signout`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(constants.LOGOUT_ERRORS.default);
  })
  .then((data) => {
    if (!data.loggedOut) {
      throw new Error(constants.LOGOUT_ERRORS.default);
    } else {
      return data;
    }
  })
  .catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const updateUserProfile = (name, email) => fetch(
  `${constants.MAIN_API_BASE_URL}/users/me`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name,
      email,
    }),
  },
)
  .then((response) => {
    if (response.status === 409 && constants.PROFILE_ERRORS[response.status]) {
      throw new Error(constants.PROFILE_ERRORS[response.status]);
    } else if (response.status !== 200) {
      throw new Error(constants.PROFILE_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.PROFILE_ERRORS.default);
    }
  })
  .then((data) => data)
  .catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const saveFilm = (film) => fetch(
  `${constants.MAIN_API_BASE_URL}/movies`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(
      film,
    ),
  },
)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(constants.MOVIES_ERRORS[response.status]
        ? constants.MOVIES_ERRORS[response.status]
        : constants.MOVIES_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.PROFILE_ERRORS.default);
    }
  })
  .then((data) => data)
  .catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const getSavedFilmList = () => fetch(
  `${constants.MAIN_API_BASE_URL}/movies`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  },
)
  .then((response) => {
    if (response.status !== 200 && constants.MOVIES_ERRORS[response.status]) {
      throw new Error(constants.MOVIES_ERRORS[response.status]);
    } else if (response.status !== 200) {
      throw new Error(constants.MOVIES_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.MOVIES_ERRORS.default);
    }
  })
  .then((res) => {
    const resultMovies = [];
    if (res.data) {
      res.data.map((item) => resultMovies.push({ ...item, saved: true }));
    }
    return resultMovies;
  }).catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });

export const removeFilm = (filmId) => fetch(
  `${constants.MAIN_API_BASE_URL}/movies/${filmId}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  },
)
  .then((response) => {
    if (response.status !== 200 && constants.MOVIES_ERRORS[response.status]) {
      throw new Error(constants.MOVIES_ERRORS[response.status]);
    } else if (response.status !== 200) {
      throw new Error(constants.MOVIES_ERRORS.default);
    } else {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(constants.MOVIES_ERRORS.default);
    }
  }).catch((err) => {
    const errorResponse = { error: err.message };
    return errorResponse;
  });
