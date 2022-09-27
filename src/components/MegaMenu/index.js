import React, { useContext } from "react";
import * as styles from "./mega-menu.module.css";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";
import { TheAppContext } from "../../provider/AppContext";

const IndexMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(TheAppContext);
  return (
    <div
      className={`${styles.menu__div__wrap}  ${
        menuOpen ? null : styles.hidden
      }`}
    >
      <div className={styles.menu__inner}>
        <Menu />
        <div className={styles.close} onClick={() => setMenuOpen(!menuOpen)}>
          +
        </div>
        <MenuFooter />
      </div>
    </div>
  );
};

export default IndexMenu;
