import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { useFilter } from "../hooks/useFilter";
import {
  DECKTOP,
  TABLET,
  MOBILE,
  SCREEN_SIZE_MOBILE,
  SCREEN_SIZE_MEDIUM,
  SCRIN_SIZE_LARGE,
  DISPLAYED_CARDS_5,
  DISPLAYED_CARDS_8,
  DISPLAYED_CARDS_12,
  DISPLAYED_CARDS_16,
} from "../../utils/constants";
import "./Movies.css";

function Movies({
  loggedIn,
  onSearch,
  handleSaveFilm,
  isSaveMovie,
  isLoading,
  isErrorLoading,
  movies,
  onDelete,
}) {
  const [moviesShort, setMoviesShort] = useState(false);
  const filter = useFilter(movies, moviesShort);
  const [isMoviesShown, setIsMoviesShown] = useState(0);

  function countMoviesShown() {
    const display = window.innerWidth;
    if (display > SCRIN_SIZE_LARGE) {
      setIsMoviesShown(DISPLAYED_CARDS_16);
    } else if (display > SCREEN_SIZE_MEDIUM) {
      setIsMoviesShown(DISPLAYED_CARDS_12);
    } else if (display > SCREEN_SIZE_MOBILE) {
      setIsMoviesShown(DISPLAYED_CARDS_8);
    } else if (display < SCREEN_SIZE_MOBILE) {
      setIsMoviesShown(DISPLAYED_CARDS_5);
    }
  }
  React.useEffect(() => {
    countMoviesShown();
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", countMoviesShown);
  });
  function showMore() {
    const display = window.innerWidth;
    if (display > SCRIN_SIZE_LARGE) {
      setIsMoviesShown(isMoviesShown + DECKTOP);
    } else if (display > SCREEN_SIZE_MEDIUM) {
      setIsMoviesShown(isMoviesShown + TABLET);
    } else if (display < SCREEN_SIZE_MEDIUM) {
      setIsMoviesShown(isMoviesShown + MOBILE);
    }
  }

  useEffect(() => {
    const checkbox = JSON.parse(localStorage.getItem("checkbox"));
    if (checkbox) {
      setMoviesShort(true);
    }
  }, []);

  function handleCheckbox() {
    setMoviesShort((p) => !p);
    localStorage.setItem("checkbox", !moviesShort);

    setMoviesShort(!moviesShort);
  }
  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={onSearch}
          onChange={handleCheckbox}
          onMoviesShort={moviesShort}
        />
        {!isLoading ? (
          <MoviesCardList
            showButton={true}
            movies={filter}
            errorsLoading={isErrorLoading}
            handleSaveFilm={handleSaveFilm}
            isSaveMovie={isSaveMovie}
            onDelete={onDelete}
            onMoviesShown={isMoviesShown}
          />
        ) : (
          <Preloader />
        )}
        {isMoviesShown > 0 && isMoviesShown < movies.length ? (
          <button className="movies__button" type="button" onClick={showMore}>
            Еще
          </button>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
