import logo from "./logo.svg";
import "./assets/css/button.css";
import "./assets/css/insta.css";
import "./assets/css/normalize.css";
import "./assets/css/posts.css";
import "./assets/css/projects.css";
import "./assets/css/scroller.css";
import "./assets/css/scrum.css";
import "./assets/css/style.css";
import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Scrumboard from "./components/Scrumboard/Scrumboard";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [DOMContentLoaded, setDomContentLoaded] = useState(false);
  const load_callback = () => {
    setDomContentLoaded(true);
  };
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Albert Sigman Resume</title>
        <meta name="description" content="" />
        <meta name="author" content="" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="shortcut icon" href="favicon.png" />
      </head>

      <body>
        <Preloader loaded={DOMContentLoaded} />
        <main>
          <Sidebar />
          <div className="main2">
            <Header load_callback={load_callback} />
            <Scrumboard />
            <Projects />
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
