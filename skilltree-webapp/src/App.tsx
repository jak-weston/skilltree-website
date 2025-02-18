import React, { useState, useEffect } from "react";
import FitBee from "./components/FitBee.tsx"; // Adjust the path based on your file structure
import purpleHome from "./images/purple-home-screen.png";
import redHome from "./images/red-home-screen.png";
import Features from "./components/Features.tsx";
import Featured from "./components/Featured.tsx";
import Home from './images/Home.png';
import Challenge from './images/Challenge.png';
import Streak from './images/Streak.png';
import Achievement from './images/Achievements.png';
import Premium from "./components/Premium.tsx";
import Hiring from "./components/Hiring.tsx";
import Footer from "./components/Footer.tsx";
import BetaTest from "./components/BetaTest.tsx";
import Anniversary from "./components/Anniversary.tsx";
import Hiring2 from "./components/Hiring2.tsx";


const Skills: string[] = ["Intuitive Skill Progressions", "AI Workout Camera Trainer", "Tailored to Your Abilities", "Over +50 Skills to Choose From"];
const Duels: string[] = ["Compete with Friends", "Follow Other Athletes & their Workouts", "Create Custom Duels", "Leaderboards with Your Friends"];
const Achievements: string[] = ["Unlock Badges & Stickers", "Qualify for Competitions Near You", "Challenge Friends for Stickers", "Complete Challenges for Badges"];
const Progress: string[] = ["Personal Records & Maxes", "Daily Reminders ", "Celebrate Milestones", "Streak Leaderboard with Friends"];

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
          mockupImage={purpleHome}
          appColor="logo-placeholder"
        />
      )}
      {currentHome === "red" && (
        <FitBee
          mockupImage={redHome}
          appColor="red-logo-placeholder"
        />
      )}

      <Featured />
      
      <Features
        Position="left"
        Title="Learn Skills"
        Subtext="Unlock new skills like handstand pushups through gamified daily workouts."
        FeatureDiscriptionArray={Skills}
        mockupImage={Home}
      />
      <Features
        Position="right"
        Title="Duel Friends"
        Subtext="Challenge your friends to a duel and see who can do the most pushups in a minute."
        FeatureDiscriptionArray={Duels}
        mockupImage={Challenge}
      />
      <Features
        Position="left"
        Title="Achievements"
        Subtext="See your progress as you unlock new achievements & badges!"
        FeatureDiscriptionArray={Achievements}
        mockupImage={Achievement}
      />
      <Features
        Position="right"
        Title="Track Progress"
        Subtext="We send daily reminders to make sure you never lose your streak."
        FeatureDiscriptionArray={Progress}
        mockupImage={Streak}
      />

      <Premium />

      <BetaTest />

      <Footer />
    </div>
  );
}
const Test = "Work with friends to unlock new achievements & badges";
export default App;
