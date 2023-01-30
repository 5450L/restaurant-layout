import React from "react";
import Button from "../../components/common/Buttons/Button";
import bookDetailsStyles from "./BookDetails.module.css";

export default function BookDetails() {
  return (
    <div className={bookDetailsStyles.bookDetails}>
      <div className={bookDetailsStyles.imageBlock}>
        <img
          src="/images/eggs.png"
          alt="eggs"
          className={bookDetailsStyles.big}
        />
        <img src="/images/eggs.png" alt="eggs" />
        <img src="/images/eggs.png" alt="eggs" />
        <img src="/images/eggs.png" alt="eggs" />
      </div>
      <div className={bookDetailsStyles.infoBlock}>
        <h3 className={bookDetailsStyles.title}>
          Яичница-глязунья из трех яиц
        </h3>
        <hr />
        <div className={bookDetailsStyles.price}>
          <h3>250 ₴</h3> / 400 грамм
        </div>
        <label htmlFor="amount">
          <h3>Количество порций:</h3>
        </label>
        <div className={bookDetailsStyles.amountInput}>
          <input type="number" id="amount" min="1" defaultValue={1} />
          <div className={bookDetailsStyles.button}>
            <Button text="В корзину" />
          </div>
        </div>
        <hr />
        <div className={bookDetailsStyles.additivesBlock}>
          <h3 className={bookDetailsStyles.title}>Сделать еще вкуснее</h3>
          <ul className={bookDetailsStyles.additivesList}>
            <li>
              <label>
                <h4>Тигровые креветки 60 г</h4>
                <p>250 ₴</p>
              </label>
              <input type="checkbox" />
            </li>
            <li>
              <label>
                <h4>Томаты / паприка</h4>
                <p>80 ₴</p>
              </label>
              <input type="checkbox" />
            </li>
            <li>
              <label>
                <h4>Бекон</h4>
                <p>120 ₴</p>
              </label>
              <input type="checkbox" />
            </li>
            <li>
              <label>
                <h4>Сыр чеддер 30 г</h4>
                <p>80 ₴</p>
              </label>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
