import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";

function SavedMovies({
  loggedIn,
  saveMovies,
  isSaveMovie,
  onDelete,
  onSearchMovies,
}) {
  const [filterMovies, setFilterMovies] = useState([]);

  const [isShortFilm, setIsShortFilm] = useState(false);
  const filter = useFilter(filterMovies, isShortFilm);

  function handleSaveChechbox() {
    setIsShortFilm((prev) => !prev);
  }
  function searchFilterMovies(query) {
    const filterMovies = onSearchMovies(saveMovies, query);
    setFilterMovies(filterMovies);
  }
  useEffect(() => {
    setFilterMovies(saveMovies);
  }, [saveMovies]);

  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={searchFilterMovies}
          onChange={handleSaveChechbox}
          onMoviesShort={isShortFilm}
        />
        <MoviesCardList
          showButton={false}
          movies={filter}
          isSaveMovie={isSaveMovie}
          onDelete={onDelete}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
