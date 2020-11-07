import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="main">
      <div className="main__intro">
        <h1>Hi There</h1>
        <h5>
          I'm Peshal Agarwal and I'm an aspiring Data Scientist. I am currently
          pursuing M.S in Statistics at ETH Zurich{" "}
        </h5>
      </div>
      <div className="main__image">
        <img alt="background" src={require("../assets/peshal.png")}></img>
      </div>
    </div>
  );
};
