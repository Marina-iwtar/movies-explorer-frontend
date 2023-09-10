import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Profile({ loggedIn }) {
  const [isEditProfile, setEditProfile] = useState(true);
  function handleRedacte() {
    setEditProfile((item) => !item);
  }
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, Марина!</h1>
          <form className="profile__form" noValidate name="profile">
            <label className="profile__subtitle">
              Имя
              <input
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
                placeholder="Марина"
                disabled={isEditProfile}
                type="text"
              />
              <span className="profile__input-error"></span>
            </label>
            <div className="profile__border-bottom"></div>
            <label className="profile__subtitle">
              E-mail
              <input
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
                placeholder="pochta@yandex.ru"
                disabled={isEditProfile}
                type="email"
              />
              <span className="profile__input-error"></span>
            </label>
          </form>
          {isEditProfile ? (
            <div className="profile__container">
              <button
                className="profile__button"
                type="button"
                onClick={handleRedacte}
              >
                Редактировать
              </button>
              <Link to="/" className="profile__link">
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <button
              className="profile__button-save"
              type="submit"
              onClick={handleRedacte}
            >
              Сохранить
            </button>
          )}
        </section>
      </main>
    </>
  );
}
export default Profile;
