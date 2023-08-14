export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Код ошибки: ${res.status}`);
    }
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }

  getStartedCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }

  setCardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'PUT',
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.avatar }),
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }

  editingProfile(profileInfo) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: profileInfo["name"],
        about: profileInfo["profession"],
      }),
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  deleteCardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
      .then(res => { return this._checkResponse(res); })
  }
}

const api =  new Api({
  baseUrl: 'http://localhost:3001/',

  headers: {
    'Content-Type': 'application/json',
  }
})

export default api