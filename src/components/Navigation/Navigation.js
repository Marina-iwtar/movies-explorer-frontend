import "./Navigation.css";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, iActive] = useState(false);
  const location = useLocation();
  function toggleBurgerMenu() {
    setIsOpen(!isOpen);
    iActive(!isActive);
  }
  return (
    <section className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <button className={`navigation__burger-button ${isActive ? "is-active" : ""}`} onClick={toggleBurgerMenu}>
        <span className={`navigation__span ${isActive ? "line-active" : ""}`}></span>
        <span className={`navigation__span ${isActive ? "line-active" : ""}`}></span>
        <span className={`navigation__span ${isActive ? "line-active" : ""}`}></span>
      </button>
       <div className={`${isOpen ? "navigation__overlay":""}`}></div>
         <nav className="navigation__nav ">
            <NavLink
              to="/"
              className="navigation__title navigation__title_none"
            >
              Главная
            </NavLink>
            <NavLink to="/movies" className="navigation__title">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="navigation__title">
              Сохраненные фильмы
            </NavLink>
            <NavLink to="/profile" className="navigation__account">
              <h2 className="navigation__subtitle">Аккаунт</h2>
              <div
                className={`navigation__logo ${
                  location.pathname === "/"
                    ? "navigation__logo"
                    : "navigation__logo_grey"
                }`}
              ></div>
            </NavLink>
          </nav>
         </section>
  );
}
export default Navigation;
