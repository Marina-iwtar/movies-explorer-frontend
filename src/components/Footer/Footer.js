import "./Footer.css";
import { Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__nav">
        <p className="footer__author">&copy;{new Date().getFullYear()}</p>
        <ul className="footer__lists">
          <li className="footer__list">
            <Link
              className="footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__list">
            <Link
              className="footer__link"
              href="https://github.com/Marina-iwtar"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
