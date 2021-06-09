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
    if (!skill_to_add.Skill) {
      return;
    }
    skill_to_add.Mastery = board;
    skill_to_add.id =
      encodeURI(skill_to_add.Skill) + "--" + Math.ceil(Math.random() * 1000000);
    callback(skill_to_add);
    setState({ adding: false, newSkill: skill_init });
  };

  useEffect(() => {
    if (state.adding) {
      inputRef.current.focus();
    }
  }, [state.adding]);

  if (!state.adding) {
    return (
      <div
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
          ref={inputRef}
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
            <FontAwesomeIcon
              className={`add ${state.newSkill.Skill ? "" : "disabled"}`}
              icon={faCheckCircle}
              onClick={handleSubmit}
            />

            <FontAwesomeIcon
              className="cancel"
              icon={faTimesCircle}
              onClick={() =>
                setState({
                  newSkill: { skill_init },
                  adding: false,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScrum;
