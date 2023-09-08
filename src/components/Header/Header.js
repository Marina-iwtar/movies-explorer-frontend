import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn }) {
  const location = useLocation();
  const headerBack = `header ${location.pathname ==="/" ? "header" :"header_back"}`;
  return (
    <>
      {!loggedIn ? (
        <header className={headerBack}>
          <Link to="/">
            <img className="header__logo" alt="логотип" src={logo}></img>
          </Link>
          <Navigation />
        </header>
      ) : (
        <header className={headerBack}>
          <Link to="/">
            <img className="header__logo" alt="логотип" src={logo}></img>
          </Link>
          <nav className="header__nav">
            <Link to="/signup" className="header__title">Регистрация</Link>
           <Link to="/signin"> <button className="header__button" >Войти</button></Link> 
          </nav>
        </header>
      )}
    </>
  );
}
export default Header;
