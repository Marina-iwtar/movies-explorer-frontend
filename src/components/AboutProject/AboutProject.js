import "./AboutProject.css";
import Titles from "../Titles/Titles"

function AboutProject() {
  return (
    <section className="aboutProject">
      <Titles title="О проекте "/>
      <section className="aboutProject__containers">
        <div className="aboutProject__container">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__container">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <div className="aboutProject__duration">
        <h4 className="aboutProject__header aboutProject__header_green">1 неделя</h4>
        <h4 className="aboutProject__header">4 недели</h4>
        <p className="aboutProject__text">Front-end</p>
        <p className="aboutProject__text">Back-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
