// import "./assets/css/button.css";
// import "./assets/css/insta.css";
// import "./assets/css/normalize.css";
// import "./assets/css/posts.css";
// import "./assets/css/projects.css";
// import "./assets/css/scroller.css";
// import "./assets/css/scrum.css";
// import "./assets/css/style.css";
// import "./assets/css/bg.css";

import { Helmet } from "react-helmet";
import AppContext from "./provider/AppContext";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <>
      <AppContext>
        <Helmet>
          <meta charset="utf-8" />
          <title>Codes</title>
          <meta name="description" content="" />
          <meta name="author" content="" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="shortcut icon" href="favicon.png" />
        </Helmet>
        <SinglePage />
      </AppContext>
    </>
  );
}

export default App;
