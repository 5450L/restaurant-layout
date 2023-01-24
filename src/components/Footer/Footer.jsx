import React from "react";
import footerStyles from "./Footer.module.css";

import Logo from "../common/Logo/Logo.jsx";

import visa from "../../assets/icons/Visa.svg";
import masterCard from "../../assets/icons/MasterCard.svg";

export default function Footer() {
  return (
    <footer>
      <div className={footerStyles.footerContainer}>
        <Logo />
        <div className={footerStyles.policy}>Политика конфиденциальности</div>
        <div className={footerStyles.payments}>
          <img src={visa} alt="" />
          <img src={masterCard} className={footerStyles.masterCard} />
        </div>
      </div>
    </footer>
  );
}
