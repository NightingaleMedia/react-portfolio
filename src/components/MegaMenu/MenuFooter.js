import React, { useContext } from "react";
import "./menu-footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "../LightBox/ContactForm/Contact";
import { TheAppContext } from "../../provider/AppContext";
const MenuFooter = () => {
  const { setBoxShowing } = useContext(TheAppContext);
  return (
    <div className="menu-footer__div">
      <div>
        <h2>Connect</h2>
      </div>
      <div className="connect">
        <div>419-304-8059 | Columbus, OH, USA</div>
        <div className="email">
          <a href="">alsigman@gmail.com</a>
        </div>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faGlobe} />
        <FontAwesomeIcon
          icon={faEnvelope}
          onClick={() =>
            setBoxShowing({
              visible: true,
              component: <Contact />,
            })
          }
        />
        <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
  );
};

export default MenuFooter;
