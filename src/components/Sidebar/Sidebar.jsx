import React, { useState } from "react";
import sidebarStyles from "./Sidebar.module.css";

import Logo from "../common/Logo/Logo.jsx";
import { telegram, twitter, youtube } from "../../assets/icons/icons";

import Menu from "../Menu/Menu";

export default function Sidebar() {
  let [isOpened, toggleIsOpened] = useState(false);

  return (
    <div className={sidebarStyles.sidebar}>
      <Menu isOpened={isOpened} toggleIsOpened={toggleIsOpened} />
      <div className={sidebarStyles.sidebarContainer}>
        <div className={sidebarStyles.sidebarHeader}>
          <Logo />
          <div
            className={sidebarStyles.burger}
            onClick={() => toggleIsOpened(true)}
          >
            <span></span>
          </div>
        </div>
        <div className={sidebarStyles.icons}>
          {youtube()}
          {twitter()}
          {telegram()}
        </div>
      </div>
    </div>
  );
}
