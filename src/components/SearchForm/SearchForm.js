import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <input
          className="searchForm__input"
          placeholder="Фильм"
          type="text"
          required
          name="film"
          minLength={2}
        ></input>
        <button className="searchForm__button" type="submit">
          Поиск
        </button>
      </form>
      <FilterCheckbox />
      <div className="searchForm__border"></div>
    </section>
  );
}
export default SearchForm;
