import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const skill_init = {
  Skill: "",
  Category: "frontend",
  Mastery: null,
  id: null,
  activated: true,
};

const AddScrum = ({ callback, board }) => {
  const inputRef = useRef();
  const [state, setState] = useState({
    adding: false,
    newSkill: skill_init,
  });

  const handleSubmit = () => {
    const skill_to_add = { ...state.newSkill };

    skill_to_add.Mastery = board;
    skill_to_add.id = encodeURI(skill_to_add.name);
    callback(skill_to_add);
    setState({ adding: false, newSkill: skill_init });
  };

  if (!state.adding) {
    return (
      <div
        ref={inputRef}
        onClick={() => setState((prev) => ({ ...prev, adding: true }))}
        className={`single-skill new`}
      >
        <div className="single-skill--content">
          <div className="add">+</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`single-skill ${state?.newSkill?.Category || "other"} adding`}
    >
      <div className="single-skill--content adding">
        <input
          type="text"
          placeholder="Type here..."
          value={state.newSkill.Skill}
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              newSkill: { ...prev.newSkill, Skill: e.target.value },
            }));
          }}
        />
        <div className="input--options">
          <select
            onChange={(e) => {
              setState((prev) => ({
                ...prev,
                newSkill: { ...prev.newSkill, Category: e.target.value },
              }));
            }}
          >
            <option value="frontend">Front End</option>
            <option value="backend">Back End</option>
            <option value="creative">Creative</option>
            <option value="other">Other</option>
          </select>
          <div className="button--area">
            {state.newSkill.Skill && (
              <FontAwesomeIcon
                className="add"
                icon={faCheckCircle}
                onClick={handleSubmit}
              />
            )}

            <FontAwesomeIcon
              className="cancel"
              icon={faTimesCircle}
              onClick={() => setState((prev) => ({ ...prev, adding: false }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScrum;
