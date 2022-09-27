import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../src/assets/img/insta0.png";
import img2 from "../../src/assets/img/insta1.png";
import img3 from "../../src/assets/img/insta2.png";
import Menu from "./MegaMenu/Menu";
const Footer = () => {
  return (
    <footer className="bg--dot">
      <div className="footer__inner">
        <div className="menu-wrap">
          <Menu />
        </div>
        <div className="footer--columns">
          <div className="footer-col-1">
            <img src={img1} alt="project picture" className="footer-img" />
            <img src={img2} alt="project picture" className="footer-img" />
            <img src={img3} alt="project picture" className="footer-img" />
            <h3>About This Site</h3>
            <p>
              As I keep rolling out changes on this site, I hope you'll stay in
              touch. I am always looking for collaborators, inspiration or
              feedback. Drop a line, suggest a book, sing me a song, you're the
              piano man.
            </p>
          </div>

          <div className="footer-col-3">
            <h3>Contact</h3>
            <p>
              alsigman@gmail.com <br />
              www.albertsigman.com
            </p>

            <p className="logos">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
          </div>
        </div>
        <div className="tagline"></div>
      </div>
    </footer>
  );
};

export default Footer;
