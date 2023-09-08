import "./Navigation.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
 
  function toggleBurgerMenu(){
    setIsOpen(!isOpen);
  }
  return (
    <section className={`navigation ${isOpen ?"navigation_opened":""}`}>
      <button className="navigation__burger-button" onClick={toggleBurgerMenu}>
        <span className="navigation__span"></span>
        <span className="navigation__span"></span>
        <span className="navigation__span"></span>
      </button>
      <nav className="navigation__nav">
        <NavLink to="/" className="navigation__title navigation__title_none">
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
          <div className="navigation__logo"></div>
        </NavLink>
      </nav>
    </section>
  );
}
export default Navigation;
