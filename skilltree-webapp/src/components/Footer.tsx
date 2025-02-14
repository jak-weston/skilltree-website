import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <h2 className="footer-title">Contact Us</h2>
      <div className="footer-content">
        {/* Left Contact Info */}
        <div className="contact-info">
          <p className="name">Spandan Das</p>
          <p className="role">Co–Founder</p>
        </div>
        <a className="email" href="mailto:spdas@ucsd.edu">spdas@ucsd.edu</a>


        {/* Divider */}
        <div className="divider"></div>

        {/* Right Contact Info */}
        <div className="contact-info">
          <p className="name">Jack Weston</p>
          <p className="role">Co–Founder</p>
        </div>
        <a className="email" href="mailto:jweston@ucsd.edu">jweston@ucsd.edu</a>
      </div>
    </footer>
  );
};

export default Footer;
