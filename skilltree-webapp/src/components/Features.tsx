import React from "react";
import "./Features.css";

const Skills: string[] = ["Intuitive Skill Progressions", "AI Workout Camera Trainer", "Tailoredto Your Abilities", "Over +50 Skills to Choose From"]

const Featured = ({ Position, Title, Subtext, FeatureDiscriptionArray, mockupImage }) => {
    return (
        <div className={`fitbee-container ${Position}`}>
            <div className="fitbee-main">
                {/* Phone Image */}
                <div className="phone-section">
                    <img className="features-phone-placeholder" src={mockupImage} alt="Phone Mockup" />
                </div>
                
                {/* Content Section */}
                <div className="features-content-section">
                    <div className="title">{Title}</div>
                    <div className="subtext">{Subtext}</div>
                    <div className="feature-description">
                        <div className="feature-container">
                        {FeatureDiscriptionArray.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <span className="checkmark">☑️</span>
                                <span className="description">{feature}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;