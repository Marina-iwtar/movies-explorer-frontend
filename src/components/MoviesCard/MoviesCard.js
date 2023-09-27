import "./MoviesCard.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MoviesCard({card}) {
  const [isButtonSave, setButtonSave] = useState(false);
  const location = useLocation();
  const saveMovies = location.pathname === "/saved-movies";
  const button = `moviesCard__button ${
    isButtonSave ? "moviesCard__button_save" : "moviesCard__button_img "
  }${saveMovies ? "moviesCard__button-delete" : ""}`;
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;

  function cardClick() {
    setButtonSave((item) => !item);
  }
  return (
    <article className="moviesCard">
      
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">{card.nameRU}</h2>
        <p className="moviesCard__time">{`${durationMovieHours}ч ${durationMovieMinuts}м`}</p>
      </div>
      <Link target="_blank" to={card.trailerLink}>
      <img className="moviesCard__image" alt={card.nameRu} src={`https://api.nomoreparties.co/${card.image.url}`}/>
      </Link>
      <button type="button" className={button} onClick={cardClick}>
        {isButtonSave ? "Сохранить" : ""}
      </button>
     
    </article>
  );
}
export default MoviesCard;
