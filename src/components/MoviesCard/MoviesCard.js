import "./MoviesCard.css";
import image from "../../images/imagecard.png";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const [isButtonSave, setButtonSave] = useState(false);
  const location = useLocation();
  const saveMovies = location.pathname==='/saved-movies';
  const button = `moviesCard__button ${
    isButtonSave ? "moviesCard__button_save" : "moviesCard__button_img "
  }${saveMovies ? "moviesCard__button-delete":""}`;
  
  function cardClick(card) {
    setButtonSave((card) => !card);
  }
  return (
    <section className="moviesCard">
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">В погоне за Бенкси</h2>
        <p className="moviesCard__time">0ч 42м</p>
      </div>
      <img className="moviesCard__image" alt="постер" src={image}></img>
      <button type="button" className={button} onClick={cardClick}>
        {isButtonSave ? "Сохранить" : ""}
      </button>
    </section>
  );
}
export default MoviesCard;
