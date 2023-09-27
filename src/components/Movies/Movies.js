import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, { useState, useEffect } from "react";
import * as MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { useFilter } from "../hooks/useFilter";

function Movies({ loggedIn, onSearch }) {
  const [movies, setMovies] = useState([]); //стейт фильмов
  const [isLoading, setIsLoading] = useState(true); //стейт загрузки прелоадера
  const [isErrorLoading, setErrorLoading] = useState(""); //стейт ошибки сервера
  const [moviesShort, setMoviesShort] = useState(false);
  const filter = useFilter(movies, false);
  //console.log(filter);
  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    const checkbox = JSON.parse(localStorage.getItem("checkbox"));
    console.log(checkbox);
   // setMoviesShort(checkbox);
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
    if(checkbox){    
      setMoviesShort(true);
    }
  }, []);
   console.log(moviesShort);

  function handleCheckbox() {
    setMoviesShort((p) => !p);
    localStorage.setItem("checkbox", !moviesShort);
    setMovies(filter);
  }


  function handleMovies(query) {
    setIsLoading(false);
    MoviesApi.getMovies()
      .then((res) => {
        setMovies(onSearch(res, query));
        localStorage.setItem("movies", JSON.stringify(onSearch(res, query)));
        setErrorLoading("");
      })
      .catch((err) => {
        setErrorLoading(
          "Во время запроса произошла ошибка,пожалуйста подождите"
        );
        console.log(`Ошибка ${err}`);
      })
      .finally(() => setIsLoading(true));
  }

  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main className="movies">
        <SearchForm onMovies={handleMovies} onChange={handleCheckbox} onMoviesShort={moviesShort}/>
        {isLoading ? (
          <MoviesCardList
            showButton={true}
            movies={filter}
            errorsLoading={isErrorLoading}
          />
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
