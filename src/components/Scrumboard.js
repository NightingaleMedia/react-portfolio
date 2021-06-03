import React, { useEffect, useState } from "react";
import Skill_JSON from "../assets/db/Scrum.json";

const Scrumboard = () => {
  const [skills, setSkills] = useState({
    todo: { list: [], DisplayName: "To Do" },
    inprogress: { list: [], DisplayName: "In Progress" },
    mastered: { list: [], DisplayName: "Mastered" },
  });

  useEffect(() => {
    const copy_skill = { ...skills };
    Skill_JSON.map((skill) => {
      copy_skill[skill.Mastery].list.push(skill);
    });

    setSkills(copy_skill);
  }, []);

  return (
    <section className="bg--1 padding-bot scrumboard">
      <div className="scrum-head bg--1">
        <center>
          <h2 className="bk scrum-header">My Skillset Scrum Board</h2>
          <p className="scrum-description">
            Over the past few years I have slowly been fleshing out a vast
            technical and creative skillset. I put some of my skills to use in
            developing this interactive scrumboard with vanilla Javascript. It
            is a work in progress but the core functionality is there. Give it a
            shot, click around.
          </p>
        </center>
        <div className="skill-legend">
          <div className="skill-square frontend">
            <center>Front End</center>
          </div>

          <div className="skill-square backend">
            <center>Back End</center>
          </div>

          <div className="skill-square creative">
            <center>Creative</center>
          </div>

          <div className="skill-square music">
            <center>Music</center>
          </div>

          <div className="skill-square other">
            <center>Other</center>
          </div>
        </div>
      </div>
      <div className="skill-scrum">
        {Object.keys(skills).map((skill_title) => (
          <div className="skill-scrum--board" key={skill_title}>
            <div className="skill-scrum--header">
              <center>
                <h2>{skills[skill_title].DisplayName}</h2>
              </center>
            </div>
            {skills[skill_title].list.map((sk) => (
              <div
                className={`single-skill ${sk.Category.toLowerCase()}`}
                key={sk.Skill}
              >
                <div className="single-skill--content">{sk.Skill}</div>
                <div className="single-skill--drag">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scrumboard;
