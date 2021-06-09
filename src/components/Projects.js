import React from "react";
import Project_JSON from "../assets/db/Projects.json";
import SingleProject from "./SingleProject";
const Projects = () => {
  return (
    <section className="section__projects" id="projects">
      <h1 className="black">Projects</h1>
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
        />
      ))}
    </section>
  );
};

export default Projects;
