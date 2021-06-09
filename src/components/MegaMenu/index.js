import React from "react";
import styles from "./mega-menu.module.css";
const IndexMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`${styles["menu__div--wrap"]}  ${
        menuOpen ? null : styles.hidden
      }`}
    >
      <div className={styles["menu--inner"]}>
        <div className={styles["header--menu"]}>
          <div className={styles["main-item"]}>
            <div className={styles["main-item--title"]}> Portfolio </div>
            <ul>
              <div>
                <ul>
                  Test
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              </div>
              <div>
                <li>Test</li>
              </div>
              <div>
                <li>Test</li>
              </div>
            </ul>
          </div>
          <div className="main-item">Resume</div>
          <div className="main-item">Contact</div>
          <div className="main-item">Everything Else</div>
        </div>
        <div className={styles.close} onClick={() => setMenuOpen(!menuOpen)}>
          +
        </div>
      </div>
    </div>
  );
};

export default IndexMenu;
