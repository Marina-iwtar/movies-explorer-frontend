import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useState, useEffect } from "react";

function MoviesCardList({ showButton,movies, errorsLoading }) {
  //const [cards, setCards] = useState([]);
  
  return (
    <section className="moviesCardList">
    { movies.length > 0 ? 
     ( <ul className="moviesCardList__list">
       {movies.map((card)=>(
        <MoviesCard card ={card} key={card.id}/> 
       ))}
        </ul>):(
      <p className="moviesCardList__text">{errorsLoading ||'По вашему запросу ничего не найдено'}</p>
        )
        }
      {showButton && (
        <button className="moviesCardList__button" type="button">
          Еще
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
