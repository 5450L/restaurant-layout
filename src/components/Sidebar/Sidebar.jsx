import React from "react";
import sidebarStyles from "./Sidebar.module.css";

import Logo from "../common/Logo/Logo.jsx";
import { telegram, twitter, youtube } from "../common/Logo/icons";

export default function Sidebar() {
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarContainer}>
        <div className={sidebarStyles.sidebarHeader}>
          <Logo />
          <div className={sidebarStyles.burger}>
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
