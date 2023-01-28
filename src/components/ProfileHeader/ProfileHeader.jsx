import React from "react";
import profileHeaderStyles from "./ProfileHeader.module.css";

import { userIcon, cart } from "../../assets/icons/icons";

export default function ProfileHeader() {
  return (
    <div className={profileHeaderStyles.header}>
      <ul className={profileHeaderStyles.naviList}>
        <li>
          <a href="">Личный кабинет</a>
        </li>
        <li>
          <a href="" className={profileHeaderStyles.headerIcons}>
            {userIcon()}
          </a>
        </li>
        <li>
          <a href="" className={profileHeaderStyles.headerIcons}>
            {cart()}
          </a>
        </li>
      </ul>
    </div>
  );
}
