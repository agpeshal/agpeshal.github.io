import React from "react";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards">
      <div className="awards__image__1">
        <img
          alt="Peshal Agarwal being awarded by Mr. RC Bhargava"
          src={require("../assets/award.JPG")}
        ></img>
      </div>
      <div className="awards__image__2">
        <img
          alt="Peshal Agarwal degree of graduation from IIT Kanpur"
          src={require("../assets/degree.png")}
        ></img>
      </div>
    </div>
  );
};

export default Awards;
