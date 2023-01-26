import React from "react";
import blockTitleStyles from "./BlockTitle.module.css";

export default function BlockTitle(props) {
  return (
    <div className={blockTitleStyles.block}>
      <div className={blockTitleStyles.title}>{props.title.toUpperCase()}</div>
      <div className={blockTitleStyles.strip}></div>
    </div>
  );
}
