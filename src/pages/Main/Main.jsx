import React from "react";
import mainStyles from "./Main.module.css";

import AOS from "aos";

import Button from "../../components/common/Buttons/Button";
import BlockTitle from "../../components/common/BlockTitle/BlockTitle";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={mainStyles.mainPage}>
      <section className={mainStyles.topPart}>
        <div className={mainStyles.header}>
          <ul className={mainStyles.naviList}>
            <li>
              <NavLink to="menu">Меню</NavLink>
            </li>
            <li>
              <NavLink to="">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="">Оплата</NavLink>
            </li>
          </ul>

          <NavLink to="book-form" className={mainStyles.button}>
            <Button text="Бронь столика" />
          </NavLink>
        </div>
      </section>

      <section className={mainStyles.infoPart}>
        <div className={mainStyles.infoBlock} data-aos="fade-right">
          <BlockTitle title="О ресторане" />
          <div className={mainStyles.infoBlockContent}>
            <div className={mainStyles.text}>
              <h2>Food Exxe Relo</h2>
              <p>
                Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
                lectus phasellus non ornare eget velit. Facilisi urna, tristique
                dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo
                pulvinar sit volutpat nulla vestibulum. Morbi pellentesque enim
                massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi
                massa enim nullam sem vehicula. Amet quis pellentesque enim
                porttitor lectus interdum. Nisi, faucibus pharetra at porttitor.
                Fringilla luctus pretium in viverra. In adipiscing tempor amet
                malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate
                risus massa dictum. Cras at quis in eu, faucibus feugiat vel.
                At.
              </p>
            </div>
            <div className={mainStyles.images}></div>
          </div>
        </div>

        <div className={mainStyles.infoBlock} data-aos="fade-left">
          <BlockTitle title="Меню" />
          <div className={mainStyles.infoBlockContent}>
            <div className={mainStyles.text}>
              <h2>Меню</h2>
              <p>
                At faucibus nullam mauris vitae ut non. Augue libero non nibh
                nec, et eget erat. Nascetur nunc neque, varius massa aliquam
                interdum turpis massa. Ac tortor aliquam risus, interdum nisl
                mauris sit. Ut placerat fermentum pellentesque ac at. Vitae
                venenatis faucibus urna mi eget vitae quam eu. Euismod sed
                mauris id turpis iaculis. Erat rutrum dolor, vitae morbi. Nunc
                cras cras aliquet blandit faucibus massa sagittis semper.
              </p>
            </div>
            <div className={mainStyles.images}>
              <NavLink to="/menu" className={mainStyles.imgBlock}>
                <div className={mainStyles.imgFrame}>
                  <img src="images/menu.jpg" alt="menu" />
                </div>
                <div className={mainStyles.imgTitle}>
                  <BlockTitle title=" Основное Меню" />
                </div>
              </NavLink>
              <a href="" className={mainStyles.imgBlock}>
                <div className={mainStyles.imgFrame}>
                  <img src="images/barCard.png" alt="barCard" />
                </div>
                <div className={mainStyles.imgTitle}>
                  <BlockTitle title="Барная Карта" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={mainStyles.infoBlock} data-aos="fade-right">
          <BlockTitle title="Доставка" />
          <div className={mainStyles.infoBlockContent}>
            <div className={mainStyles.text}>
              <h2>Служба доставки</h2>
              <div>
                <p>
                  Phasellus diam, ultrices lobortis integer et. Diam, purus vel
                  sagittis, non, a. In risus, venenatis enim vitae mauris
                  aliquet orci. Consectetur nibh interdum nullam ut lobortis eu
                  etiam sem. Et in vitae pellentesque non, lectus orci natoque
                  faucibus suspendisse. Semper aliquam id et ultrices velit
                  donec lacus. In odio sit nibh volutpat cras placerat sit
                  feugiat dignissim. Rutrum et suspendisse tortor, lobortis
                  eleifend in fringilla. Egestas cursus imperdiet cursus dui,
                  nulla id massa. Hendrerit nam enim semper porttitor imperdiet
                  diam semper. Nulla sit etiam cras morbi enim elementum euismod
                  sapien.
                </p>
                <div className={mainStyles.buttons}>
                  <div className={mainStyles.button}>
                    <Button text="Подробнее" />
                  </div>
                  <div className={mainStyles.button}>
                    <Button text="Условия доставки" type="secondaryDark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
