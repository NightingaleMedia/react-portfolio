import React, { useEffect, useState } from "react";
import loader from "../../src/assets/img/preloader/preloader.gif";
const Preloader = ({ loaded }) => {
  const [disappear, setDisappear] = useState(false);
  const [percent, setPercent] = useState(0);
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      if (i > 100) {
        i = 100;
        clearInterval(interval);
      }
      setPercent(Math.ceil(i));
      i = i * 1.21;
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setMessage("Hi, I'm Al");
        setTimeout(() => {
          setDisappear(true);
        }, 1500);
      }, 3000);
    }
  }, [loaded]);
  return (
    <div id="preloader" className={`${disappear ? "loaded" : ""}`}>
      <div className="preloader-loaded" style={{ width: percent + "%" }}>
        {percent < 100 ? <h3>{percent}%</h3> : <h3>{message}</h3>}
      </div>
      <div className="preloader-inner">
        <img className="preloader-pic" src={loader} alt="preloader" />
      </div>
    </div>
  );
};

export default Preloader;
