import React from "react";
import "./Featured.css"; // Make sure this matches your file structure

const Featured = () => {
  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured on</h2>
      <div className="featured-logos">
        <div className="logo-placeholder">Logo 1</div>
        <div className="logo-placeholder">Logo 2</div>
        <div className="logo-placeholder">Logo 3</div>
        <div className="logo-placeholder">Logo 4</div>
      </div>
    </div>
  );
};

export default Featured;
