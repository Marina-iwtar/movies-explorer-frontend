import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import { getSearchMovies, getShortMovies } from "../../utils/utils";

function SavedMovies({
  loggedIn,
  saveMovies,
  isSaveMovie,
  onDelete,
  
}) {
  const [filterMovies, setFilterMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const FiltershortMovies = !isSearching
    ? getShortMovies(saveMovies)
    : getShortMovies(filterMovies);
  const displayingMovie=isSearching ? filterMovies : saveMovies;
  function handleSaveChechbox(e) {
    if (e.target.checked) {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }
  function handleSubmit(query) {
    setIsSearching(true);
    const filterMovies = getSearchMovies(saveMovies, query);
    setFilterMovies(filterMovies);
  }

  useEffect(() => {
    setFilterMovies(state=>state.filter(movie=>saveMovies.find(film =>film._id=== movie._id)));
  }, [saveMovies]);

  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main className="movies">
        <SearchForm
          onSearch={handleSubmit}
          onChange={handleSaveChechbox}
          onMoviesShort={isShortFilm}
        />
        <MoviesCardList
          showButton={false}
          movies={isShortFilm ? FiltershortMovies : displayingMovie}
          isSaveMovie={isSaveMovie}
          onDelete={onDelete}
        />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
