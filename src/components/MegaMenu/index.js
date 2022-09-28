import React, { useContext } from "react";
import * as styles from "./mega-menu.module.css";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";
import { TheAppContext } from "../../provider/AppContext";
import classnames from "classnames";
const IndexMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(TheAppContext);

  console.log(
    classnames(styles.menu__div__wrap, {
      [styles.hidden]: menuOpen,
    }),
  );
  return (
    <div
      className={classnames(styles.menu__div__wrap, {
        [styles.hidden]: !menuOpen,
      })}
      // className={`${styles.menu__div__wrap}  ${menuOpen ? "" : styles.hidden}`}
    >
      <div className={styles.menu__inner}>
        <Menu />
        <div>{menuOpen}</div>
        <div className={styles.close} onClick={() => setMenuOpen(!menuOpen)}>
          +
        </div>
        <MenuFooter />
      </div>
    </div>
  );
};

export default IndexMenu;
