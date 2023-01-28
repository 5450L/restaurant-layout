import React from "react";
import menuPageStyles from "./MenuPage.module.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

export default function MenuPage() {
  return (
    <div className={menuPageStyles.menuPage}>
      <ProfileHeader />

      <ul className={menuPageStyles.menuNaviList}>
        <li className={menuPageStyles.active}>Завтраки</li>
        <li>Raw</li>
        <li>Холодные закуски</li>
        <li>Брускетты</li>
        <li>К вину</li>
        <li>Салаты</li>
        <li>Супы</li>
        <li>Паста и ризотто</li>
        <li>Мясо</li>
        <li>Рыба</li>
        <li>Grill</li>
        <li>Мангал</li>
        <li>Гарниры</li>
      </ul>

      <div className={menuPageStyles.menuItemList}>
        <ul>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>
    </div>
  );
}
