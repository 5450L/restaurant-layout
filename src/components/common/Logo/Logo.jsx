import React from "react";
import logoStyles from "./Logo.module.css";
import fork from "./LogoImages/Fork.svg";
import food from "./LogoImages/Food.svg";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to={"/"}>
      <div className={logoStyles.logoContainer}>
        <img src={food} className={logoStyles.food} />
        <img src={fork} className={logoStyles.fork} />
      </div>
    </NavLink>
  );
}
