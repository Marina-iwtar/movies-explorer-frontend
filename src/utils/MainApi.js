export const BASE_URL = 'https://api.iwtarmovies.nomoredomainsicu.ru';
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({
    status:res.status,
    message: `Ошибка: ${res.status}`});
}
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
export const editProfileUser = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkResponse);
};
export const getCardsMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
export const addSaveCards = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: "https://api.nomoreparties.co" + data.image.url,
      trailerLink: data.trailerLink,
      thumbnail:
        "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    }),
  }).then(checkResponse);
};
export const removeCard = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization:`Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
