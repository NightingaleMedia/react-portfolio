import React, { useContext } from "react";
import { TheAppContext } from "../AppContext";
import Scrollspy from "react-scrollspy";
import logo from "../assets/img/logo.png";
import Contact from "./LightBox/ContactForm/Contact";
const Sidebar = () => {
  const { menuOpen, setMenuOpen, setBoxShowing } = useContext(TheAppContext);
  return (
    <div className="Sidebar">
      <nav className="sidebar-holder">
        <div className="sidebar-inner">
          <a href={"#home"}>
            <img src={logo} className="logo" />
          </a>
        </div>
        <div
          className={`sidebar-inner menu-holder ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Scrollspy items={["skills", "projects"]} currentClassName="current">
          <div className="menu--links">
            <div className="sidebar-inner ">
              <h3 className="rotate">
                <a className="hover-purp nav__item" href="#skills">
                  Skills
                </a>
              </h3>
            </div>

            <div className="sidebar-inner">
              <h3 className="rotate">
                <a className="hover-purp nav__item" href="#projects">
                  Projects
                </a>
              </h3>
            </div>
            <div className="sidebar-inner">
              <h3
                className="rotate hover-purp nav__item"
                onClick={() =>
                  setBoxShowing({
                    visible: true,
                    component: <Contact />,
                  })
                }
              >
                Contact
              </h3>
            </div>
          </div>
        </Scrollspy>
      </nav>
    </div>
  );
};

export default Sidebar;
