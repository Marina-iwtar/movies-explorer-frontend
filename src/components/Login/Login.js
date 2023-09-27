import "./Login.css";
import React from "react";
import Form from "../Form/Form";
import { EMAIL_VALID } from "../../utils/constants";
import useForm  from "../hooks/useForm";

function Login({onSubmit,error}) {

const { errors,
    isValue,
    handleChange,
    isFormValid}= useForm();
  /*const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setLoginValue({
      ...loginValue,
      [e.target.name]: e.target.value,
    });
  }*/

  function handleSubmit(e){
    e.preventDefault();
     onSubmit(isValue);
   }

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        subtitle="Ещё не зарегистрированы?"
        linkName="Регистрация"
        link="/signup"
        onSubmit={handleSubmit}
        error={error}
        noValidate
        isDisabled={!isFormValid}
      >
        <label className="login__field">
          E-mail
          <input
           onChange={handleChange}
           value={isValue.email ||""}
            className="login__input"
            placeholder="E-mail"
            required
            minLength={6}
            maxLength={30}
            type="email"
            name="email"
            pattern={EMAIL_VALID}
          />
          <span className="login__input-error">{errors.email || ""}</span>
        </label>
        <label className="login__field login__field_margin">
          Пароль
          <input
             onChange={handleChange}
             value={isValue.password || ""}
            className="login__input"
            placeholder="пароль"
            required
            minLength={2}
            maxLength={30}
            name="password"
            type="password"
          />
          <span className="login__input-error">{errors.password || ""}</span>
        </label>
      </Form>
    </main>
  );
}
export default Login;
