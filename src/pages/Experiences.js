import React from "react";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>IBM</h2>
            <div className="content__div">
              <img src={require("../assets/peshal_IBM.jpg")} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Goldman Sachs</h2>
            <div className="content__div">
              <img src={require("../assets/peshal_IBM.jpg")} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>IBM</h2>
            <div className="content__div">
              <img src={require("../assets/peshal_IBM.jpg")} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
