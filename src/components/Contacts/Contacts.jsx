import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import contactsStyles from "./Contacts.module.css";

import { phone, mapPoint } from "../common/Logo/icons";

import Button from "../Buttons/Button";

export default function Contacts() {
  return (
    <div>
      <BlockTitle title="Контакты" />
      <div className={contactsStyles.contactsContent}>
        <ul className={contactsStyles.arriveBlockList}>
          <li className={contactsStyles.arriveBlock}>
            <div className={contactsStyles.arriveTime}>
              <h2>2</h2>
              <span>мин</span>
            </div>
            <p>из центра Санкт-Петербурга</p>
          </li>
          <li className={contactsStyles.arriveBlock}>
            <div className={contactsStyles.arriveTime}>
              <h2>12</h2>
              <span>мин</span>
            </div>
            <p>из города Зеленогорск</p>
          </li>
          <li className={contactsStyles.arriveBlock}>
            <div className={contactsStyles.arriveTime}>
              <h2>42</h2>
              <span>мин</span>
            </div>
            <p>из аэропорта Пулково</p>
          </li>
          <li className={contactsStyles.arriveBlock}>
            <div className={contactsStyles.arriveTime}>
              <h2>52</h2>
              <span>мин</span>
            </div>
            <p>из города Павловск</p>
          </li>
        </ul>
        <div className={contactsStyles.contactCard}>
          <div className={contactsStyles.contactCardInfo}>
            <ul>
              <li>
                {mapPoint()} <span>Санкт-Петербург, Северная дорога, 11 </span>
              </li>
              <li>
                {phone()} <span>+7 (921) 777-77-77</span>
              </li>
            </ul>
            <h3>Время работы</h3>
            <ul>
              <li>
                <span>Вск-Чт</span> <span>с 12:00 до 23:00</span>
              </li>
              <li>
                <span>Пт-Сб</span> <span>с 12:00 до 03:00</span>
              </li>
            </ul>
            <div className={contactsStyles.cardInfoButtons}>
              <Button text="Бронь столика" />
              <Button text="Задать вопрос" />
            </div>
          </div>
          <div className={contactsStyles.map}></div>
        </div>
      </div>
    </div>
  );
}
