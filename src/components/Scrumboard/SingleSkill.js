import React from "react";

const SingleSkill = ({
  data,
  setDragging,
  dragging,
  update_skill,
  hover_board,
}) => {
  return (
    <div
      className={`single-skill ${data.Category.toLowerCase()} ${
        data.activated ? "" : "single-skill--off"
      }  ${data.dragging ? "dragging" : ""}`}
      draggable={true}
      onDragStart={(e) => {
        console.log("drag start", hover_board);
        const update = data;
        update.dragging = true;
        update_skill(data, update);
      }}
      onDragEnd={() => {
        const update = data;
        console.log(hover_board);
        update.dragging = false;

        update_skill(data, update);
      }}
    >
      <div className="single-skill--content">
        {data.Skill} {hover_board}
      </div>
      <div className="single-skill--drag">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SingleSkill;
