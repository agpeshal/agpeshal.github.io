import React from "react";
import Data from "../data/data-projects";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      {Data.map((d) => (
        <div className="card" key={d.title}>
          <h4>{d.title}</h4>
          <img src={d.image} alt={d.title}></img>
          <p>{d.summary}</p>
          <div className="project__btn">
            {d.report !== "none" ? (
              <Button
                startIcon={
                  <Avatar src={require("../assets/page.png")}></Avatar>
                }
                variant="outlined"
                href=""
                target="_blank"
              >
                Report
              </Button>
            ) : null}
            {d.github !== "none" ? (
              <Button
                startIcon={
                  <Avatar src={require("../assets/github-logo.png")}></Avatar>
                }
                variant="outlined"
                href=""
                target="_blank"
              >
                GITHUB
              </Button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
