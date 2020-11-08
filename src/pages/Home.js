import React from "react";
import Button from "@material-ui/core/Button";
import "./Home.css";
import { Avatar } from "@material-ui/core";

export const Home = () => {
  return (
    <div className="main">
      <div className="main__intro">
        <h1>Hi There</h1>
        <h4>
          I'm Peshal Agarwal, an aspiring Machine Learning Engineer. I am graduate
          student at ETH Zurich majoring in Statistics.
        </h4>
        <div className="main__introBtn">
          <Button
            className="main__introBtn1"
            variant="outlined"
            href={require("../assets/pdf/resume.pdf")}
            target="_blank"
            startIcon={<Avatar src={require("../assets/pdf.png")}></Avatar>}
          >
            {" "}
            RESUME
          </Button>
          <Button
            href="https://github.com/agpeshal"
            target="_blank"
            variant="outlined"
            className="main__introBtn-2"
            startIcon={
              <Avatar src={require("../assets/github-logo.png")}></Avatar>
            }
          >
            {" "}
            GITHUB
          </Button>
        </div>
      </div>
      <div className="main__image">
        <img alt="background" src={require("../assets/peshal_final.png")}></img>
      </div>
    </div>
  );
};
