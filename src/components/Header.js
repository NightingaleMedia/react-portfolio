import React, { useEffect, useRef } from "react";
import HeaderSketch from "./HeaderSketch";

const Header = ({ load_callback }) => {
  const headerRef = useRef();
  useEffect(() => {
    load_callback();
  }, []);
  return (
    <div className="header-inner" ref={headerRef}>
      <div className="header-one">
        <a href="https://github.com/NightingaleMedia" target="_blank">
          <h2>My Github</h2>
        </a>
      </div>

      <div className="header-two">
        <a href="http://www.albertsigman.com" target="_blank">
          <h2>My Website</h2>
        </a>
      </div>
      <div className="header-three">
        <a href="https://www.linkedin.com/in/albertksigman26/" target="_blank">
          <h2>LinkedIn</h2>
        </a>
      </div>
      <div className="header-text">
        <h2>Hi, I'm Al.</h2>
      </div>
      {/* <header id="header"></header> */}
      <HeaderSketch id="header" parentRef={headerRef} />
    </div>
  );
};

export default Header;
