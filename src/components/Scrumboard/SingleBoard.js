import React, { useState } from "react";
import SingleSkill from "./SingleSkill";
import { Droppable, Draggable } from "react-beautiful-dnd";
import AddScrum from "./AddScrum";

const SingleBoard = ({
  skill_title,
  list,
  update_skill,
  board_num,
  addSkill,
}) => {
  return (
    <Droppable droppableId={skill_title.toLowerCase().replace(/ /gi, "")}>
      {(provided, snapshot) => (
        <div
          className={`skill-scrum--board ${
            snapshot.isDraggingOver ? "opaque" : ""
          }`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="skill-scrum--header ">
            <center>
              <h2>{skill_title}</h2>
            </center>
          </div>

          {list &&
            list.map((sk, index) => (
              <SingleSkill
                key={`${skill_title}--${sk.Skill}-${sk.id}`}
                data={sk}
                update_skill={update_skill}
                index={index}
              />
            ))}

          {provided.placeholder}
          <AddScrum board={skill_title} callback={addSkill} />
        </div>
      )}
    </Droppable>
  );
};

export default SingleBoard;
