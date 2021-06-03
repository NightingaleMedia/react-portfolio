import React from "react";

const Preloader = ({ loaded }) => {
  return (
    <div id="preloader" className={`${loaded ? "loaded" : ""}`}>
      <div className="preloader-loaded">
        <h3>0%</h3>
      </div>
      <div className="preloader-inner">
        <img
          className="preloader-pic"
          src="public/img/preloader/preloader.gif"
          alt="preloader"
        />
      </div>
    </div>
  );
};

export default Preloader;
