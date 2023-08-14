import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className="login">
      <h2 className="login__title">{props.title}</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__input-container">
          <input
            className="login__input email-input"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <input
            className="login__input password-input"
            type="password"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <button className="login__button button" type="submit">
          {props.buttonText}
        </button>
      </form>
    </section>
  );
}

export default Login;
