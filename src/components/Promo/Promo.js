import "./Promo.css";
import React from "react";
import image from "../../images/text__COLOR_landing-logo.svg";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>

        <a href="#tech" className="promo__link">
          <button className="promo__buttom">Узнать больше</button>
        </a>
      </div>
      <img className="promo__image" src={image} alt="изображение мира"></img>
    </section>
  );
}
export default Promo;
