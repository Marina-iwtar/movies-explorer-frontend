import "./AboutMe.css";
import Titles from "../Titles/Titles";
import photo from "../../images/ава.jpg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <Titles title="Студент" />
      <section className="aboutMe__allAboutMe">
        <div className="aboutMe__info">
          <h2 className="aboutMe__title">Марина</h2>
          <h3 className="aboutMe__subtitle">Фронтенд-разработчик</h3>
          <p className="aboutMe__text">
            Я живу в городе Уфа. Закончила факультет Автоматизированных систем
            обработки и управления информацией. В данный момент изучаю
            программирование на JS и верстку сайтов. В свободное время изучаю
            фотографию, психологию и медицину.Очень люблю читать разножанровые
            книги.
          </p>
          <a
            className="aboutMe__link"
            href="https://github.com/Marina-iwtar"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutMe__image" src={photo} alt="фото обо мне" />
      </section>
    </section>
  );
}
export default AboutMe;
