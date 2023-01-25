import React from "react";
import bookFormStyles from "./BookForm.module.css";

import Logo from "../common/Logo/Logo";
import { cross } from "../common/Logo/icons";
import Button from "../Buttons/Button";

export default function BookForm() {
  return (
    <form className={bookFormStyles.bookForm}>
      <div className={bookFormStyles.crossButton}>{cross()}</div>

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
  );
}
