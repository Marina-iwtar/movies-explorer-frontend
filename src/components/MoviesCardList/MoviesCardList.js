import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList({
  movies,
  errorsLoading,
  handleSaveFilm,
  saveMovies,
  isSaveMovie,
  onDelete,
  onMoviesShown,
}) {
  return (
    <section className="moviesCardList">
      {movies.length > 0 ? (
        <ul className="moviesCardList__list">
          {movies.slice(0, onMoviesShown).map((card) => (
            <MoviesCard
              card={card}
              key={card.id ? card.id : card.movieId}
              handleSaveFilm={handleSaveFilm}
              saveMovies={saveMovies}
              isSaveMovie={isSaveMovie}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <p className="moviesCardList__text">
          {errorsLoading || "По вашему запросу ничего не найдено"}
        </p>
      )}
    </section>
  );
}
export default MoviesCardList;
