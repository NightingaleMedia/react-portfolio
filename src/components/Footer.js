import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col-1">
        <img
          src="assets/img/insta0.png"
          alt="project picture"
          className="footer-img"
        />
        <img
          src="assets/img/insta1.png"
          alt="project picture"
          className="footer-img"
        />
        <img
          src="assets/img/insta4.png"
          alt="project picture"
          className="footer-img"
        />
        <h3>About This Site</h3>
        <p>
          As I keep rolling out changes on this site, I hope you'll stay in
          touch. I am always looking for collaborators, inspiration or feedback.
          Drop a line, suggest a book, sing me a song, you're the piano man.
        </p>
      </div>
      <div className="footer-col-2"></div>

      <div className="footer-col-3">
        <h3>Contact</h3>
        <p>
          alsigman@gmail.com <br />
          www.albertsigman.com
        </p>

        <p className="logos">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-medium"> </i>
          <i className="fab fa-linkedin"></i>
        </p>
      </div>
      <div className="tagline"></div>
    </footer>
  );
};

export default Footer;
