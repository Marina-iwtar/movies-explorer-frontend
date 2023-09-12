import "./Techs.css";
import Titles from "../Titles/Titles";

function Techs() {
  return (
    <section className="techs">
      <Titles title="Технологии" />
      <div className="techs__container" id="tech">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__components">
          <li className="techs__component">HTML</li>
          <li className="techs__component">CSS</li>
          <li className="techs__component">JS</li>
          <li className="techs__component">React</li>
          <li className="techs__component">Git</li>
          <li className="techs__component">Express.js</li>
          <li className="techs__component">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
export default Techs;
