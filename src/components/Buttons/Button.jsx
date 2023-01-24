import React from "react";
import buttonStyles from "./Buttons.module.css";

export default function Button(props) {
  return <div className={buttonStyles.button}>{props.text}</div>;
}
