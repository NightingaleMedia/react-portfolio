import React, { useContext } from "react";
import menu_items from "./menu-items";
import "./mega-menu.css";
import * as styles from "./mega-menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { TheAppContext } from "../../provider/AppContext";
import Contact from "../LightBox/ContactForm/Contact";
import ExternalProject from "../LightBox/ExternalProject";
const Menu = () => {
  const { setBoxShowing, setMenuOpen } = useContext(TheAppContext);

  console.log({ styles });
  return (
    <div className={styles.header__menu}>
      {menu_items.map((item, index) => (
        <div
          className={styles.main_item + " main_item"}
          key={`${item.id}--${index}`}
        >
          <div className={styles.main_item__title + " underliney"}>
            {item.displayName}{" "}
            <FontAwesomeIcon icon={faCaretDown} className="down-icon" />
          </div>
          <ul>
            <div
              className={
                styles.sub_menu__block + " " + styles[item.customClasses[0]]
              }
            >
              {item.items &&
                item.items.map((l, index) => (
                  <ul className={l.customClasses[0]} key={`${l.id}--${index}`}>
                    {l.id === "contact" ? (
                      <div
                        onClick={() =>
                          setBoxShowing({
                            visible: true,
                            component: <Contact />,
                          })
                        }
                      >
                        {l.displayName}
                      </div>
                    ) : (
                      <a className={"hover-purp"} href={l.link}>
                        {l.displayName}
                      </a>
                    )}
                    {l.items.map((i, index) =>
                      i.info ? (
                        <a
                          key={`${index}`}
                          onClick={() => {
                            setMenuOpen(false);
                            setBoxShowing({
                              visible: true,
                              component: <ExternalProject data={i} />,
                            });
                          }}
                        >
                          <li className={l.customClasses[0]}>
                            {i.displayName}
                          </li>
                        </a>
                      ) : (
                        <a href={i.link} key={`${l.index}--${index}`}>
                          <li className={l.customClasses[0]}>
                            {i.displayName}
                          </li>
                        </a>
                      ),
                    )}
                  </ul>
                ))}
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
