import React from "react";
import styles from "./skillLegend.module.css";
const SingleSkillLegend = ({ toggle_square, data, index }) => {
  return (
    <div className={styles.toggle_wrap} onClick={() => toggle_square(index)}>
      <div className={styles.toggle}>
        <input
          type={`checkbox`}
          checked={data.activated}
          onChange={(e) => e.preventDefault()}
        />
        <span></span>
      </div>
      <div
        className={`skill-square ${data.DisplayName.toLowerCase().replace(
          / /gi,
          ""
        )}${data.activated ? "" : "skill-square--off"}`}
      >
        <center>{data.DisplayName}</center>
      </div>
    </div>
  );
};

export default SingleSkillLegend;
