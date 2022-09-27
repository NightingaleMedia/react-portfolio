import React, { useEffect, useRef, useContext } from "react";
import HeaderSketch from "./HeaderSketch";
import { TheAppContext } from "../AppContext";

const Header = () => {
  const { load_callback, menuOpen, boxShowing, setMenuOpen } =
    useContext(TheAppContext);

  let headerRef = useRef();

  useEffect(() => {
    headerRef = headerRef;
    load_callback();
  }, [load_callback]);

  return (
    <div className="header-inner" ref={headerRef} id={"home"}>
      <div className="header-one">
        <a onClick={() => setMenuOpen(true)}>
          <h2>Everything Else</h2>
        </a>
      </div>

      <div className="header-two">
        <a href="#projects">
          <h2>Projects</h2>
        </a>
      </div>
      <div className="header-three">
        <a href="#skills">
          <h2>Skills</h2>
        </a>
      </div>
      <div className="header-text">
        <h2>Hi, I'm Al.</h2>
      </div>
      {/* <header id="header"></header> */}
      {menuOpen || boxShowing.visible ? null : (
        <div id="header">
          <HeaderSketch ref={headerRef} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Header);
