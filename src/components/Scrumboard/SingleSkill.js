import React from "react";
import { Draggable } from "react-beautiful-dnd";
const SingleSkill = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`single-skill ${data.Category.toLowerCase()} ${
            data.activated ? "" : "single-skill--off"
          } `}
        >
          <div className="single-skill--content">{data.Skill}</div>
          <div className="single-skill--drag">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default SingleSkill;
