import "./Login.css";
import React from "react";
import Form from "../Form/Form";
function Login() {
  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        subtitle="Ещё не зарегистрированы?"
        linkName="Регистрация"
        link="/signup"
      >
        <label className="login__field">
          E-mail
          <input
            className="login__input"
            placeholder="pochta@yandex.ru|"
            required
            minLength={6}
            maxLength={30}
            type="email"
          />
          <span className="login__input-error"></span>
        </label>
        <label className="login__field login__field_margin">
          Пароль
          <input
            className="login__input"
            placeholder="пароль"
            required
            minLength={2}
            maxLength={30}
            name="logPasword"
            type="password"
          />
          <span className="login__input-error"></span>
        </label>
      </Form>
    </main>
  );
}
export default Login;
