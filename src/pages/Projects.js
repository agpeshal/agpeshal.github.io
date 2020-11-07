import React from "react";
import Data from "../data/data-projects";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      {Data.map((d) => (
        <div className="card" key={d.title}>
          <h4>{d.title}</h4>
          <img src={d.image} alt={d.title}></img>
          <p>{d.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
