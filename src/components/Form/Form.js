import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import React from "react";

function Form(props) {
  return (
    <section className="form">
      <Link to="/">
        <img className="form__logo" alt="логотип" src={logo}></img>
      </Link>
      <form className="form__content" noValidate>
        <h1 className="form__title">{props.title}</h1>
        {props.children}
        <button type="submit" className="form__button">
          {props.buttonName}
        </button>
      </form>
      <p className="form__subtitle">
        {props.subtitle}
        <Link to={props.link} className="form__link">
          {props.linkName}
        </Link>
      </p>
    </section>
  );
}
export default Form;
