import React from "react";
import logo from "../assets/img/logo.png";
const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="Sidebar">
      <nav className="sidebar-holder">
        <div className="sidebar-inner">
          <img src={logo} className="logo" />
        </div>
        <div
          className={`sidebar-inner menu-holder ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu--links">
          <div className="sidebar-inner">
            <h3 className="rotate">
              <a href="#skills">Skills</a>
            </h3>
          </div>

          <div className="sidebar-inner">
            <h3 className="rotate">
              <a href="#projects"> Projects </a>
            </h3>
          </div>
          <div className="sidebar-inner">
            <h3 className="rotate">
              <a
                href="https://www.linkedin.com/in/albertksigman26/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
