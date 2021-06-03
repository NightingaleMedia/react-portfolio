import React from "react";
import logo from "../assets/img/logo.png";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav className="sidebar-holder">
        <div className="sidebar-inner">
          <img src={logo} className="logo" />
        </div>
        <div className="sidebar-inner">
          <h3 className="rotate">
            <a href="http://www.albertsigman.com" target="_blank">
              Website
            </a>
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
        <div className="sidebar-inner">
          <h3 className="rotate">
            <a href="#projects"> My Projects </a>
          </h3>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
