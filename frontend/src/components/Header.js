import logo from "../images/header__logo.svg";
import { Link } from "react-router-dom";
import React from "react";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt={props.alt} className="header__logo" />
      <nav className="header__container">
        <p className="header__email">{props.email}</p>
        <Link
          to={props.link}
          className="header__link"
          onClick={props.onSignOut}
        >
          {props.text}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
