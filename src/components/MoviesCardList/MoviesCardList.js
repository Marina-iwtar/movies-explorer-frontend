import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ showButton }) {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__list">
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        <li className="moviesCardList__item"><MoviesCard /></li>
        </ul>
      {showButton && (
        <button className="moviesCardList__button" type="button">
          Еще
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
