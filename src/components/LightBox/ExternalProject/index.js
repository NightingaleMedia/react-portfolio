import React from 'react';
import * as styles from './external.module.css';
const Project = ({ data }) => {
  let { displayName, info, link } = data;

  info = info.replace(/\*/gi, '<br/>');

  return (
    <div className={styles.external}>
      <h3>{displayName}</h3>

      <p dangerouslySetInnerHTML={{ __html: info }}></p>
      {link && (
        <a href={link} target="_blank">
          <button>See It Live</button>
        </a>
      )}
    </div>
  );
};

export default Project;
