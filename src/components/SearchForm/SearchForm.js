import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React, { useState, useEffect } from "react";
import { getSearchMovies } from "../../utils/utils";
import { useLocation } from "react-router-dom";

function SearchForm({ onSearch, onChange, onMoviesShort }) {
  const [searchInput, setSearchInput] = useState("");
  const [isErrorQuery, setIsErrorQuery] = useState(false);
  const location = useLocation();
  function hundleSubmit(e) {
    e.preventDefault();
    if (searchInput.trim().length === 0) {
      setIsErrorQuery(true);
    } else {
      setIsErrorQuery(false);
      onSearch(searchInput);
    }
    }
    useEffect(() => {
      if(location.pathname==='/movies'){
      const query = localStorage.getItem('query');
      if (query ) {
        setSearchInput(query);
      }
    }}, []);
  return (
    <section className="searchForm">
      <form className="searchForm__form" noValidate onSubmit={hundleSubmit}>
        <input
          className="searchForm__input"
          placeholder="Фильм"
          type="text"
          required
          name="film"
          minLength={2}
          maxLength={30}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        ></input>
        <button className="searchForm__button" type="submit">
          Поиск
        </button>
      </form>
      {isErrorQuery && (
        <span className="searchForm__error">Нужно ввести ключевое слово</span>
      )}
      <FilterCheckbox onChange={onChange} onMoviesShort={onMoviesShort} />
      <div className="searchForm__border"></div>
    </section>
  );
}
export default SearchForm;
