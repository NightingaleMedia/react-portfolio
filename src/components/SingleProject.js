import React, { useState, useRef, useEffect } from "react";
import { PUBLIC_URL } from "../constants";
const SingleProject = ({
  title,
  date,
  desc,
  spans,
  picLink,
  liveLink,
  category,
  showPlaceholder,
}) => {
  const [shifted, setShifted] = useState(false);
  const [classes, setClasses] = useState("shadow");
  const [picLoading, setPicLoading] = useState(true);
  const picRef = useRef();

  // useEffect(() => {
  //   if (!picLoading && picRef) {
  //     let img = picRef.current.querySelector("img");
  //     img.style.display = "none";
  //   }
  // }, [picLoading]);

  useEffect(() => {
    calcShifted();
    window.addEventListener("resize", calcShifted);
    return () => window.removeEventListener("resize", calcShifted);
  }, [shifted]);

  desc = desc.replace(/\*/gi, ",");

  const spanMap = () => {
    spans = spans.split("|");
    return spans.map((s) => <span key={`${title}--${s}`}>{s}</span>);
  };

  const calcShifted = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      return setClasses("shadow");
    }
    if (!shifted) {
      return setClasses("proj-shifted");
    }
    return setClasses("shadow");
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
      className={`single__project proj-shift ${classes}`}
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
            <>
              <img
                alt={desc}
                src={`${PUBLIC_URL}/img/projects/${picLink}`}
                style={{ display: "none" }}
                onError={(err) => console.log("error: ", err)}
                onScrollCapture={(e) => console.log(e)}
                onLoad={() => {
                  console.log("loaded img...");
                  picRef.current.style.backgroundImage = `url('${PUBLIC_URL}/img/projects/${picLink}')`;
                  setPicLoading(false);
                }}
              ></img>

              {/* <div className="loading-picture">
                <span></span>
                <span>Loading. . . </span>
              </div> */}
            </>
          </div>
        </div>
      </div>
      <div className="single__project--text">
        <div>
          <h3>{title}</h3>
          <p className="date">{date}</p>
        </div>
        <div>
          <p className="single__project--desc">{desc}</p>
          <a href={liveLink}>
            <button className="single__project--button">See it Live</button>
          </a>
        </div>
        <div className="single__project--list"> {spanMap()}</div>
      </div>
    </article>
  );
};

export default SingleProject;
