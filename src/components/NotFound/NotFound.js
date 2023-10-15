import "./NotFound.css";

function NotFound({ onBack }) {
  return (
    <main>
      <section className="notFound">
        <h1 className="notFound__title">404</h1>
        <p className="notFound__subtitle">Страница не найдена</p>
        <button className="notFound__button" onClick={onBack} type="button">
          Назад
        </button>
      </section>
    </main>
  );
}
export default NotFound;
