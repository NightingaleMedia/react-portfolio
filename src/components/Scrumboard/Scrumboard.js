import React, { useEffect, useState } from "react";
import Skill_JSON from "../../assets/db/Scrum.json";
import SingleBoard from "./SingleBoard";
import SingleSkillLegend from "./SingleSkillLegend";

const skillz = [
  { DisplayName: "Front End", activated: true },
  { DisplayName: "Back End", activated: true },
  { DisplayName: "Creative", activated: true },
  { DisplayName: "Other", activated: true },
];

const skill_boards = ["To Do", "In Progress", "Mastered"];

const Scrumboard = () => {
  const [skills, setSkills] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [skill_titles, set_skill_titles] = useState(skillz);

  useEffect(() => {
    const copy_skill = Skill_JSON.map((skill) => {
      skill.activated = true;
      skill.dragging = false;
      skill.destination = null;
      return skill;
    });
    setSkills(copy_skill);
  }, []);

  const toggle_skills = ({ DisplayName, activated }) => {
    const copy = [...skills];
    copy.map((skl) => {
      if (
        skl.Category.toLowerCase().replace(/ /gi, "") ===
        DisplayName.toLowerCase().replace(/ /gi, "")
      ) {
        skl.activated = activated;
      }
    });
    setSkills(copy);
  };

  const toggle_square = (index) => {
    const copy = [...skill_titles];
    let updated = copy[index];
    updated.activated = !updated.activated;
    toggle_skills(updated);
    set_skill_titles(copy);
  };

  const update_skill = (skill, updated) => {
    const copy = [...skills];
    const skill_index = copy.indexOf(skill);
    console.log(copy[skill_index]);
    copy[skill_index] = updated;

    setSkills(copy);
  };
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
          {skill_titles.map((sk, index) => (
            <SingleSkillLegend
              key={sk + "--" + index}
              data={sk}
              toggle_square={toggle_square}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="skill-scrum">
        {skills &&
          skill_boards.map((skill_title, index) => (
            <SingleBoard
              setDragging={setDragging}
              dragging={dragging}
              skill_title={skill_title}
              list={skills.filter(
                (sk) =>
                  sk.Mastery.toLowerCase() ===
                  skill_title.toLowerCase().replace(/ /gi, "")
              )}
              key={`${skill_title}--${index}`}
              update_skill={update_skill}
            />
          ))}
      </div>
    </section>
  );
};

export default Scrumboard;
