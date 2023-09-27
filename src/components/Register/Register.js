import "./Register.css";
import React,{useState} from "react";
import Form from "../Form/Form";
import { EMAIL_VALID, NAME_VALID } from "../../utils/constants";
import useForm from "../hooks/useForm";

function Register({onSubmit}) {
  //const [isState, setState] = useState(false);
  const { errors,
    isValue,
    handleChange,
    isFormValid}= useForm();
  //const red = `register__input ${isState ? "register__input_error-red":""}`;
  /*const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    name: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterValue({
      ...registerValue,
      [name]: value,
    });
  }*/
  
 function handleSubmit(e){
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
      >
        <label className="register__field">
          Имя
          <input
            onChange={handleChange}
            value={isValue.name || ''}
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
            minLength={2}
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
