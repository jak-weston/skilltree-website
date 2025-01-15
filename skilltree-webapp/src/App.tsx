import React, { useState, useEffect } from "react";
import FitBee from "./components/FitBee.tsx"; // Adjust the path based on your file structure
import QR1 from "./images/QR1.png"; // Path to QR image
import QR2 from "./images/QR2.png"; // Path to QR image
import purpleHome from "./images/purple-home-screen.png";
import redHome from "./images/red-home-screen.png";
import Features from "./components/Features.tsx";
import Featured from "./components/Featured.tsx";

const Skills: string[] = ["Intuitive Skill Progressions", "AI Workout Camera Trainer", "Tailored to Your Abilities", "Over +50 Skills to Choose From"];
const Duels: string[] = ["Compete with Friends", "Follow Other Athletes & their Workouts", "Create Custom Duels", "Leaderboards with Your Friends"];
const Achievements: string[] = ["Unlock Badges & Stickers", "Qualify for Competitions Near You", "Challenge Friends for Stickers", "Complete Challenges for Badges"];
const Progress: string[] = ["Personal Records & Maxes", "Daily Reminders ", "Celebrate Milestones", "Streak Leaderboard with Friends"];
const Premium: string[] = ["AI Workout Camera Trainer", "Support from Certified Trainers", "Freeze your Streak", "Discover Local Athletes Near You"];

function App() {
  const [currentHome, setCurrentHome] = useState<"purple" | "red" | null>(null);

  useEffect(() => {
    // Determine which home screen to display randomly
    const randomized = Math.random() < 0.5 ? "purple" : "red";
    setCurrentHome(randomized);
  })

  return (
    <div className="App">
      {currentHome === "purple" && (
        <FitBee
          qrImage={QR1}
          mockupImage={purpleHome}
          link="https://docs.google.com/forms/d/e/1FAIpQLSerCnugvyEHpVKfFFnJYkFJ3XfDyJ4lEaUZC-j-AcxNtQ6pZA/viewform"
          appColor="logo-placeholder"
        />
      )}
      {currentHome === "red" && (
        <FitBee
          qrImage={QR2}
          mockupImage={redHome}
          link="https://docs.google.com/forms/d/e/1FAIpQLScl-8DE9oXmuOWI05_h7zFCP1INsQtsxDi6b6PtQu1NB1MQRg/viewform"
          appColor="red-logo-placeholder"
        />
      )}

      <Featured />

      <Features
        Position="left"
        Title="Learn Skills"
        Subtext="Unlock new skills like handstand pushups through gamified daily workouts"
        FeatureDiscriptionArray={Skills}
      />
      <Features
        Position="right"
        Title="Duel Friends"
        Subtext="Challenge your friends to a duel and see who can do the most pushups in a minute"
        FeatureDiscriptionArray={Duels}
      />
      <Features
        Position="left"
        Title="Achievements"
        Subtext="Work with friends to unlock new achievements & badges"
        FeatureDiscriptionArray={Achievements}
      />
      <Features
        Position="right"
        Title="Track Progress"
        Subtext="We send daily reminders to make sure you never lose your streak"
        FeatureDiscriptionArray={Progress}
      />
    </div>
  );
}

export default App;
