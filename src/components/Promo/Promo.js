import "./Promo.css";
import React from "react";
import image from "../../images/text__COLOR_landing-logo.svg";

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
        <div className="promo__container-link">
          <a href="#tech" className="promo__link">
            Узнать больше
          </a>
        </div>
      </div>
      <img className="promo__image" src={image} alt=""></img>
    </section>
  );
}
export default Promo;
