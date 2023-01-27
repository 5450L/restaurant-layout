import React from "react";
import buttonStyles from "./Buttons.module.css";

export default function Button(props) {
  return (
    <div
      className={`${buttonStyles.button} ${
        props.type === "secondary" ? buttonStyles.secondary : ""
      } ${props.type === "secondaryDark" ? buttonStyles.secondaryDark : ""}`}
    >
      {props.text}
    </div>
  );
}
