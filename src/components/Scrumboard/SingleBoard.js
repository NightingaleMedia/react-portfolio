import React, { useState } from "react";
import SingleSkill from "./SingleSkill";

const SingleBoard = ({
  skill_title,
  list,
  dragging,
  setDragging,
  update_skill,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [hover_board, set_hover_board] = useState(null);
  return (
    <div
      className={`skill-scrum--board ${dragOver ? "opaque" : ""}`}
      onDragOver={() => {
        setDragOver(true);
        set_hover_board(skill_title);
      }}
      onDragLeave={() => {
        setDragOver(false);
      }}
    >
      <div className="skill-scrum--header ">
        <center>
          <h2>{skill_title}</h2>
        </center>
      </div>
      {list &&
        list.map((sk, index) => (
          <SingleSkill
            key={`${skill_title}--${sk}-${index}`}
            data={sk}
            dragging={dragging}
            setDragging={setDragging}
            update_skill={update_skill}
            hover_board={hover_board}
          />
        ))}
    </div>
  );
};

export default SingleBoard;
