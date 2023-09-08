import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({showButton}) {

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {showButton && <button className="moviesCardList__button" type="button">
        Еще
      </button>}
    </section>
  );
}
export default MoviesCardList;
