import React from "react";
import Button from "../common/Buttons/Button";
import productCardStyles from "./ProductCard.module.css";

export default function ProductCard(props) {
  return (
    <div className={productCardStyles.productCard}>
      <div className={productCardStyles.image}></div>

      <h3 className={productCardStyles.title}>{props.title}</h3>

      <div className={productCardStyles.purchase}>
        <h2>{props.price} UAH</h2>
        <Button text="В корзину" />
      </div>
    </div>
  );
}
