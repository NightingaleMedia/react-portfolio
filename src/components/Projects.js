import React, { useRef } from "react";
import Project_JSON from "../assets/db/Projects.json";
import SingleProject from "./SingleProject";

const Projects = ({ menuOpen, boxShowing }) => {
  const projRef = useRef();

  return (
    <section ref={projRef} className="section__projects bg--2" id="projects">
      <h2 style={{ marginBottom: "6rem" }} className="bk">
        Projects
      </h2>

      {Project_JSON.map((p, index) => (
        <SingleProject
          key={`project--${index}--${p.title}`}
          title={p.Title}
          date={p.Date}
          desc={p.Description}
          spans={p.Tags}
          picLink={p.PicLink}
          liveLink={p.LiveLink}
          category={p.Category}
          showPlaceholder={menuOpen || boxShowing}
        />
      ))}
    </section>
  );
};

export default Projects;
