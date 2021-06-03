import React, { useState, useRef, useEffect } from "react";

const SingleProject = ({
  title,
  date,
  desc,
  spans,
  picLink,
  liveLink,
  category,
}) => {
  const [shifted, setShifted] = useState(false);
  const [picLoading, setPicLoading] = useState(true);
  const picRef = useRef();

  desc = desc.replace(/\*/gi, ",");
  const spanMap = () => {
    spans = spans.split("|");
    return spans.map((s) => <span key={`${title}--${s}`}>{s}</span>);
  };
  const getColor = (category) => {
    let colors = {
      frontend: "#a80fdf",
      backend: "#ff204b",
      creative: "#0084f5",
      music: "#f78e1e",
      other: "#dbd4e5",
    };
    return colors[category];
  };

  return (
    <article
      onClick={() => setShifted(!shifted)}
      className={`single__project proj-shift ${shifted ? "" : "proj-shifted"}`}
    >
      <div
        className="single__project--tag"
        style={{ backgroundColor: getColor(category) }}
      ></div>
      <div className="single__project--bg">
        <div className="single__project--picture-wrap">
          <span></span>
          <span></span>
          <div className="single__project--picture" id={picLink} ref={picRef}>
            <img
              src={`${process.env.PUBLIC_URL}/img/projects/${picLink}`}
              style={{ display: "none" }}
              onError={(err) => console.log("error: ", err)}
              onLoad={() => {
                console.log("loaded img...");
                picRef.current.style.backgroundImage = `url('${process.env.PUBLIC_URL}/img/projects/${picLink}')`;
                setPicLoading(false);
              }}
            ></img>
            {picLoading && (
              <div className="loading-picture">
                <span></span>
                <span>Loading. . . </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="single__project--text">
        <h3>{title}</h3>
        <p>{date}</p>
        <p className="single__project--desc">{desc}</p>
        <span className="single__project--button">
          <a href={liveLink}> See it Live </a>
        </span>
        <div className="single__project--list"> {spanMap()}</div>
      </div>
    </article>
  );
};

export default SingleProject;
