import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <nav className="footer__nav">
        <p className="footer__author">&copy;{new Date().getFullYear()}</p>
        <ul className="footer__lists">
          <li className="footer__list">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list">
            <a
              className="footer__link"
              href="https://github.com/Marina-iwtar"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
