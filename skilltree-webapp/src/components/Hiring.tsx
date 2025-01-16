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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSerCnugvyEHpVKfFFnJYkFJ3XfDyJ4lEaUZC-j-AcxNtQ6pZA/viewform" target="_blank" rel="noreferrer">
                <img src={Application1} alt="Business Internship" />
            </a>
        </div>

        {/* Business Internship */}
        <div className="hiring-card">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScl-8DE9oXmuOWI05_h7zFCP1INsQtsxDi6b6PtQu1NB1MQRg/viewform" target="_blank" rel="noreferrer">
                <img src={Application2} alt="Business Internship" />
            </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="hiring-footer">Apply by Jan 20th, 2025!</p>
    </div>
  );
};

export default Hiring;
