import React from "react";
import "./Hiring.css";
import Application1 from "../images/UIUX_Application.png";
import Application2 from "../images/Business_Application.png";

const Hiring: React.FC = () => {
  return (
    <div className="hiring-container">
      {/* Title and Subtitle */}
      <div className="hiring-header">
        <h1>Want to Join the Team?</h1>
        <p>Lucky for you, we’re hiring interns!</p>
      </div>

      {/* Internship Cards Section */}
      <div className="hiring-cards">
        {/* UI/UX Internship */}
        <div className="hiring-card">
          <img src={Application1} alt="UI/UX Internship" />
        </div>

        {/* Business Internship */}
        <div className="hiring-card">
          <img src={Application2} alt="Business Internship" />
        </div>
      </div>

      {/* Footer Text */}
      <p className="hiring-footer">Apply by Jan 20th, 2025!</p>
    </div>
  );
};

export default Hiring;
