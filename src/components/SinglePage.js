import React, { useContext } from "react";
import { TheAppContext } from "../provider/AppContext";
import "../assets/css/button.css";
import "../assets/css/insta.css";
import "../assets/css/normalize.css";
import "../assets/css/posts.css";
import "../assets/css/projects.css";
import "../assets/css/scroller.css";
import "../assets/css/scrum.css";
import "../assets/css/style.css";
import "../assets/css/bg.css";
import Preloader from "./Preloader";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Scrumboard from "./Scrumboard/Scrumboard";
import Projects from "./Projects";
import MegaMenu from "./MegaMenu";
import Footer from "./Footer";
import Box from "./LightBox/index";
import classnames from "classnames";

const SinglePage = () => {
  const { menuOpen, boxShowing } = useContext(TheAppContext);

  return (
    <>
      <MegaMenu />
      <Box />
      <div
        // style={{ overflow: "hidden" }}
        id="wrap"
        className={menuOpen || boxShowing.visible ? "menu-open" : ""}
      >
        <Preloader />
        <main>
          <Sidebar />
          <div className="main2">
            <Header />
            <Scrumboard />
            <Projects />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SinglePage;
