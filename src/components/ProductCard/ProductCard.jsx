import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Buttons/Button";
import productCardStyles from "./ProductCard.module.css";

export default function ProductCard(props) {
  return (
    <a href={"/menu/book-details"}>
      <div className={productCardStyles.productCard}>
        <div className={productCardStyles.image}></div>

        <h3 className={productCardStyles.title}>Глазунья из трех яиц</h3>

        <div className={productCardStyles.purchase}>
          <h2>123 ₴</h2>
          <div className={productCardStyles.button}>
            <Button text="В корзину" />
          </div>
        </div>
      </div>
    </a>
  );
}
