import React, { useEffect, useState } from "react";
import Skill_JSON from "../../assets/db/Scrum.json";
import SingleBoard from "./SingleBoard";
import SingleSkillLegend from "./SingleSkillLegend";
import { DragDropContext } from "react-beautiful-dnd";

const skillz = [
  { DisplayName: "Front End", activated: true },
  { DisplayName: "Back End", activated: true },
  { DisplayName: "Creative", activated: true },
  { DisplayName: "Other", activated: true },
];

const initial = {
  todo: {
    name: "To Do",
    list: [],
  },
  inprogress: {
    name: "In Progress",
    list: [],
  },
  mastered: {
    name: "Mastered",
    list: [],
  },
};

const Scrumboard = () => {
  const [skill_titles, set_skill_titles] = useState(skillz);
  const [skill_boards, set_skill_boards] = useState(initial);

  useEffect(() => {
    const skills = Skill_JSON;

    const boards = { ...skill_boards };

    skills.map((skill) => {
      skill.activated = true;
      skill.id = encodeURI(skill.Skill);
    });

    boards.inprogress.list = skills.filter((sk) => sk.Mastery === "inprogress");
    boards.mastered.list = skills.filter((sk) => sk.Mastery === "mastered");
    boards.todo.list = skills.filter((sk) => sk.Mastery === "todo");

    set_skill_boards(boards);
  }, []);

  const toggle_skills = ({ DisplayName, activated }) => {
    const boards = { ...skill_boards };
    Object.keys(boards).map((sk) => {
      boards[sk].list.map((skill) => {
        if (
          skill.Category.toLowerCase().replace(/ /gi, "") ===
          DisplayName.toLowerCase().replace(/ /gi, "")
        ) {
          skill.activated = activated;
        }
      });
    });
    set_skill_boards(boards);
  };

  const toggle_square = (index) => {
    const copy = [...skill_titles];
    let updated = copy[index];
    updated.activated = !updated.activated;
    toggle_skills(updated);
    set_skill_titles(copy);
  };

  const handleReorder = (e) => {
    const { destination, source, draggableId } = e;
    if (!source?.droppableId || !destination?.droppableId) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      //first update the individual skill
      let boards = { ...skill_boards };
      let updated = boards[source.droppableId].list.find(
        (sk) => sk.id == draggableId
      );

      updated.Mastery = destination.droppableId;
      let old_list = [...boards[source.droppableId].list];
      let new_list = [...boards[destination.droppableId].list];
      const [removed] = old_list.splice(source.index, 1);
      new_list.splice(destination.index, 0, removed);
      // then update the board
      set_skill_boards((prev) => ({
        ...prev,
        [source.droppableId]: {
          ...prev[source.droppableId],
          list: old_list,
        },
        [destination.droppableId]: {
          ...prev[destination.droppableId],
          list: new_list,
        },
      }));
    } else {
      return;
    }
  };

  const addSkill = (skill) => {
    let boards = { ...skill_boards };
    const name = skill.Mastery.toLowerCase().replace(/ /gi, "");

    boards[name].list.push(skill);

    const list_with_new = boards[name].list;

    set_skill_boards((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        list: list_with_new,
      },
    }));
  };
  return (
    <section className="bg--1 padding-bot scrumboard" id={"skills"}>
      <div className="scrum-head bg--1">
        <center>
          <h2 className="bk scrum-header">My Skillset Scrum Board</h2>
          <p className="scrum-description">
            Over the past few years I have slowly been fleshing out a vast
            technical and creative skillset. I put some of my skills to use in
            developing this interactive <code>react</code> based scrumboard.
            <br />
            Give it a shot, click around.
            <br />
            <code>react react-dnd </code>
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
        <DragDropContext onDragEnd={handleReorder}>
          {skill_boards &&
            Object.keys(skill_boards).map((sk, index) => (
              <SingleBoard
                board_num={index + 1}
                skill_title={skill_boards[sk].name}
                list={skill_boards[sk].list}
                key={`${sk}--${index}`}
                addSkill={addSkill}
              />
            ))}
        </DragDropContext>
      </div>
    </section>
  );
};

export default Scrumboard;
