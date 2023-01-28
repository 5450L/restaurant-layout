import React from "react";
import menuStyles from "./Menu.module.css";

import { cross, youtube, twitter, telegram } from "../../assets/icons/icons";

import Logo from "../common/Logo/Logo";
import Button from "../common/Buttons/Button";

export default function Menu() {
  return (
    <div className={menuStyles.menu}>
      <div className={menuStyles.menuContent}>
        <div className={menuStyles.menuHead}>
          <div className={menuStyles.logo}>
            <Logo />
          </div>
          <div className={menuStyles.crossButton}>{cross()}</div>
        </div>

        <div className={menuStyles.menuMain}>
          <ul>
            <li>
              <a href="">Меню</a>
            </li>
            <li>
              <a href="">Доставка</a>
            </li>
            <li>
              <a href="">Оплата</a>
            </li>
          </ul>

          <Button text="Бронь столика" />
        </div>

        <div className={menuStyles.icons}>
          {youtube()}
          {twitter()}
          {telegram()}
        </div>
      </div>
    </div>
  );
}
