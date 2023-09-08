import "./NotFound.css";
import { Link } from "react-router-dom";
function NotFound(){
  return(
    <main>
    <section className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
    <Link to="/" className="notFound__link">Назад</Link>
    </section>
    </main>
  )
}
export default NotFound;