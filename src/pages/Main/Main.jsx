import React from "react";
import mainStyles from "./Main.module.css";

import Button from "../../components/common/Buttons/Button";
import Sidebar from "../../components/Sidebar/Sidebar";
import BlockTitle from "../../components/common/BlockTitle/BlockTitle";

export default function Main() {
  return (
    <div className={mainStyles.mainPage}>
      <div className={mainStyles.topPart}>
        {/* <Sidebar /> */}
        <div className={mainStyles.header}>
          <ul className={mainStyles.naviList}>
            <li>Меню</li>
            <li>Доставка</li>
            <li>Оплата</li>
          </ul>

          <div className={mainStyles.button}>
            <Button text="Бронь столика" />
          </div>
        </div>
      </div>

      <div className={mainStyles.infoPart}>
        <div className={mainStyles.infoBlock}>
          <BlockTitle title="О ресторане" />
          <div className={mainStyles.infoBlockContent}>
            <div class={mainStyles.text}>
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

        <div className={mainStyles.infoBlock}>
          <BlockTitle title="Меню" />
          <div className={mainStyles.infoBlockContent}>
            <div class={mainStyles.text}>
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
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={mainStyles.imgBlock}
              >
                <div className={mainStyles.imgFrame}>
                  <img src="images/menu.jpg" alt="menu" />
                </div>
                <div className={mainStyles.imgTitle}>
                  <BlockTitle title=" Основное Меню" />
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className={mainStyles.imgBlock}
              >
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

        <div className={mainStyles.infoBlock}>
          <BlockTitle title="Доставка" />
          <div className={mainStyles.infoBlockContent}>
            <div class={mainStyles.text}>
              <h2>Служба доставки</h2>
              <p>
                Phasellus diam, ultrices lobortis integer et. Diam, purus vel
                sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
                orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem.
                Et in vitae pellentesque non, lectus orci natoque faucibus
                suspendisse. Semper aliquam id et ultrices velit donec lacus. In
                odio sit nibh volutpat cras placerat sit feugiat dignissim.
                Rutrum et suspendisse tortor, lobortis eleifend in fringilla.
                Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit
                nam enim semper porttitor imperdiet diam semper. Nulla sit etiam
                cras morbi enim elementum euismod sapien.
                <div className={mainStyles.buttons}>
                  <div className={mainStyles.button}>
                    <Button text="Подробнее" />
                  </div>
                  <div className={mainStyles.button}>
                    <Button text="Условия доставки" type="secondaryDark" />
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
