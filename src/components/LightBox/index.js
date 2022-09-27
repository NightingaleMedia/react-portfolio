import React, { useContext, useEffect } from "react";
import { TheAppContext } from "../../provider/AppContext";
import { CSSTransition } from "react-transition-group";
import "./box.css";
const Box = () => {
  const { boxShowing, setBoxShowing } = useContext(TheAppContext);

  const handleClickOff = (e) => {
    if (boxShowing.visible && e.target.id === "wrap") {
      clearBox();
    }
  };

  const clearBox = () => {
    setBoxShowing({ visible: false, component: null });
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOff);
    return () => document.removeEventListener("click", handleClickOff, false);
  }, [boxShowing.visible]);

  // if (!boxShowing.visible) return <></>;

  return (
    <div
      className={`lightbox__div--wrap ${
        boxShowing.visible ? "" : "box--hidden"
      }`}
      id="wrap"
    >
      <CSSTransition
        in={boxShowing.visible}
        timeout={1000}
        classNames="lightbox__t"
      >
        <div className="lightbox__div" id="box-inner">
          {boxShowing.component}
        </div>
      </CSSTransition>
      <div className="lightbox__div--below"> Click Anywhere To Close</div>
    </div>
  );
};

export default Box;
