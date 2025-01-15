import React from "react";
import FitBee from "./components/FitBee.tsx"; // Adjust the path based on your file structure
import QR1 from "./images/QR1.png"; // Path to QR image
import QR2 from "./images/QR2.png"; // Path to QR image
import purpleHome from "./images/purple-home-screen.png";
import redHome from "./images/red-home-screen.png";

function App() {
  return (
    <div className="App">
      <FitBee qrImage={QR1} mockupImage={purpleHome} link={"https://docs.google.com/forms/d/e/1FAIpQLSerCnugvyEHpVKfFFnJYkFJ3XfDyJ4lEaUZC-j-AcxNtQ6pZA/viewform"} appColor="logo-placeholder" /> {/* Pass images as props */}
      <FitBee qrImage={QR2} mockupImage={redHome} link={"https://docs.google.com/forms/d/e/1FAIpQLScl-8DE9oXmuOWI05_h7zFCP1INsQtsxDi6b6PtQu1NB1MQRg/viewform"} appColor="red-logo-placeholder" /> {/* Pass images as props */}
    </div>
  );
}

export default App;