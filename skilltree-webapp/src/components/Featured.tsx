import React from "react";
import "./Featured.css"; // Make sure this matches your file structure
import blackstone from "../images/Blackstone_Logo.png"
import ucsd from "../images/UCSD_Logo.png"
import kenguru from "../images/KPro_Logo.png"
import thenix from "../images/THNX_Logo.png"


const Featured = () => {
  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured on</h2>
      <div className="featured-logos">
        <img className="featured-logo" src={blackstone}/>
        <img className="featured-logo" src={ucsd}/>
        <img className="featured-logo" src={kenguru}/>
        <img className="featured-logo" src={thenix}/>
      </div>
    </div>
  );
};

export default Featured;
