import "./Register.css";
import React from "react";
import Form from "../Form/Form";
import { EMAIL_VALID, NAME_VALID } from "../../utils/constants";
import useForm from "../hooks/useForm";

function Register({ onSubmit, error,isSubmitting }) {
  const { errors, isValue, handleChange, isFormValid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(isValue);
  }

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        subtitle="Уже зарегистрированы?"
        linkName="Войти"
        link="/signin"
        onSubmit={handleSubmit}
        isDisabled={!isFormValid}
        error={error}
        isSubmitting={isSubmitting}
      >
        <label className="register__field">
          Имя
          <input
            onChange={handleChange}
            value={isValue.name || ""}
            className="register__input"
            name="name"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={30}
            type="text"
            pattern={NAME_VALID}
          />
          <span className="register__input-error">{errors.name || ""}</span>
        </label>
        <label className="register__field">
          E-mail
          <input
            onChange={handleChange}
            value={isValue.email || ""}
            className="register__input"
            placeholder="E-mail"
            required
            minLength={6}
            maxLength={30}
            type="email"
            name="email"
            pattern={EMAIL_VALID}
          />
          <span className="register__input-error">{errors.email || ""}</span>
        </label>
        <label className="register__field">
          Пароль
          <input
            onChange={handleChange}
            value={isValue.password || ""}
            className="register__input"
            placeholder="пароль"
            required
            minLength={9}
            maxLength={30}
            type="password"
            name="password"
          />
          <span className="register__input-error">{errors.password || ""}</span>
        </label>
      </Form>
   
    </main>
  );
}
export default Register;
