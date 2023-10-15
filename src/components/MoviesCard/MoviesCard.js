import "./MoviesCard.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MoviesCard({ card, handleSaveFilm, isSaveMovie, onDelete }) {
  const [isButtonSave, setButtonSave] = useState(false);
  const location = useLocation();
  const isSavedMovies = location.pathname === "/saved-movies";
  const id = !isSavedMovies ? card.id : card.movieId;
  const isSavedMovie = isSaveMovie(id);
  const img = isSavedMovies
    ? card.image
    : `https://api.nomoreparties.co/${card.image.url}`;
  const button = `moviesCard__button ${
    isSavedMovie && !isSavedMovies
      ? "moviesCard__button_img"
      : !isSavedMovies
      ? "moviesCard__button_save"
      : "moviesCard__button-delete"
  }`;
  const durationMovieHours = Math.trunc(card.duration / 60);
  const durationMovieMinuts = card.duration % 60;
 
  function cardClick() {
    if (isSavedMovie) {
      onDelete(id);
    } else {
      handleSaveFilm(card);
      setButtonSave(!isButtonSave);
    }
  }

  return (
    <article className="moviesCard">
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">{card.nameRU}</h2>
        <p className="moviesCard__time">{`${durationMovieHours}ч ${durationMovieMinuts}м`}</p>
      </div>
      <Link target="_blank" to={card.trailerLink}>
        <img className="moviesCard__image" alt={card.nameRu} src={img} />
      </Link>
      <button type="button" className={button} onClick={cardClick}>
        {!isSaveMovie(card.id) && !isSavedMovies ? "Сохранить" : ""}
      </button>
    </article>
  );
}
export default MoviesCard;
