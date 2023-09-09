import "./Register.css";
import React, { useState } from "react";
import Form from "../Form/Form";

function Register() {
  const [isState, setState] = useState(false);
  const redInput = `register__input ${
    isState ? "register__input_error-red" : ""
  }`;
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        subtitle="Уже зарегистрированы?"
        linkName="Войти"
        link="/signin"
      >
        <label className="register__field">
          Имя
          <input
            className="register__input"
            name="name"
            placeholder="Марина"
            required
            minLength={2}
            maxLength={30}
          />
          <span className="register__input-error"></span>
        </label>
        <label className="register__field">
          E-mail
          <input
            className="register__input"
            placeholder="pochta@yandex.ru|"
            required
            minLength={6}
            maxLength={30}
          />
          <span className="register__input-error"></span>
        </label>
        <label className="register__field">
          Пароль
          <input
            className={redInput}
            placeholder="........."
            required
            minLength={2}
            maxLength={30}
          />
          <span className="register__input-error">Что-то пошло не так</span>
        </label>
      </Form>
    </main>
  );
}
export default Register;
