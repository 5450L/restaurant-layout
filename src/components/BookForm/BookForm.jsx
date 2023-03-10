import React from "react";
import bookFormStyles from "./BookForm.module.css";

import Logo from "../common/Logo/Logo";
import { cross } from "../../assets/icons/icons";
import Button from "../common/Buttons/Button";
import { NavLink } from "react-router-dom";

export default function BookForm() {
  return (
    <div className={bookFormStyles.backdrop}>
      <form className={bookFormStyles.bookForm}>
        <NavLink to={"/"} className={bookFormStyles.crossButton}>
          {cross()}
        </NavLink>

        <div className={bookFormStyles.logo}>
          <Logo />
        </div>

        <h2>ЗАБРОНИРОВАТЬ СТОЛИК</h2>
        <div className={bookFormStyles.inputField}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Телефон" />
          <div className={bookFormStyles.horizontalInputField}>
            <input type="text" placeholder="Гостей" />
            <input type="text" placeholder="Время" />
          </div>
        </div>
        <div className={bookFormStyles.formButton}>
          <Button text="Забронировать" />
        </div>
      </form>
    </div>
  );
}
