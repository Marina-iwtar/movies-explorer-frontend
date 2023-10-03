import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";
import { EMAIL_VALID, NAME_VALID } from "../../utils/constants";

function Profile({ loggedIn, onClick, onSubmit, error }) {
  const [isEditProfile, setEditProfile] = useState(true);
  const currentUser = useContext(CurrentUserContext);
  const { errors, isValue, handleChange, isFormValid, resetForm } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const validation =
    currentUser.name === isValue.name && currentUser.email === isValue.email;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(isValue);
    resetForm();
    if (!error) {
      handleRedacte();
    }
  }
  function handleRedacte() {
    setEditProfile((e) => !e);
  }

  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name} !</h1>
          <form
            className="profile__form"
            name="profile"
            id="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="profile__subtitle">
              Имя
              <input
                onChange={handleChange}
                value={isValue.name ?? currentUser.name}
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
                placeholder="Имя"
                disabled={isEditProfile}
                type="text"
                name="name"
                pattern={NAME_VALID}
              />
            </label>
            <div className="profile__border-bottom"></div>
            <span className="profile__input-error">{errors.name || ""}</span>
            <label className="profile__subtitle">
              E-mail
              <input
                onChange={handleChange}
                value={isValue.email ?? currentUser.email}
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
                placeholder="E-mail"
                disabled={isEditProfile}
                type="email"
                name="email"
                pattern={EMAIL_VALID}
              />
            </label>
            <span className="profile__input-error">{errors.email || ""}</span>
            {isEditProfile ? (
              <div className="profile__container">
                <button
                  className="profile__button"
                  type="button"
                  onClick={handleRedacte}
                >
                  Редактировать
                </button>
                <Link to="/" className="profile__link" onClick={onClick}>
                  Выйти из аккаунта
                </Link>
              </div>
            ) : (
              <div className="profile__container">
                <span className="profile__error-span">{error}</span>
                <button
                  className={
                    !isFormValid || validation
                      ? "profile__button-save profile__button-save_inactive"
                      : "profile__button-save"
                  }
                  type="submit"
                  disabled={!isFormValid || validation ? true : false}
                >
                  Сохранить
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
export default Profile;
