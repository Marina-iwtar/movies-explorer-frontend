import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, { useState } from "react";

function Movies() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList showButton={true} />
      </main>
      <Footer />
    </>
  );
}
export default Movies;
