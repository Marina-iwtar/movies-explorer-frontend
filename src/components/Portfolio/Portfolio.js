/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";


function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__nav">
        <a
          className="portfolio__link portfolio__link_border"
          href="https://github.com/Marina-iwtar/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__subtitle">Статичный сайт</h3>
          <img className="portfolio__image" src={arrow} alt="стрелка"></img>
        </a>
        <a
          className="portfolio__link portfolio__link_border"
          href="https://marina-iwtar.github.io/mesto/"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
          <img className="portfolio__image" src={arrow} alt="стрелка"></img>
        </a>
        <a
          className="portfolio__link"
          href="https://marina-iwtar.github.io/russian-travel/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
          <img className="portfolio__image" src={arrow} alt="стрелка"></img>
        </a>
      </div>
    </section>
  );
}
export default Portfolio;
