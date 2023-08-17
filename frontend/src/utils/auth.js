//export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.chola.nomoreparties.co"
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Код ошибки: ${res.status}`);
  }
}

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function getToken(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then(checkResponse);
}

export function logout() {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  }).then(checkResponse);
}