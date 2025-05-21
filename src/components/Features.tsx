import React from "react";
import "./Features.css";

const Skills: string[] = ["Intuitive Skill Progressions", "AI Workout Camera Trainer", "Tailoredto Your Abilities", "Over +50 Skills to Choose From"]

const Featured = ({ Position, Title, Subtext, FeatureDiscriptionArray, mockupImage }) => {
    return (
        <div className={`fitbee-container ${Position}`}>
            <div className="fitbee-main">
                {/* Phone Image */}
                <div className="features-phone-section">
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
                                <span className="checkmark">
                                <svg width="25" height="25" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37 18C37 22.7739 35.0509 27.3523 31.5815 30.7279C28.1121 34.1036 23.4065 36 18.5 36C13.5935 36 8.88795 34.1036 5.41852 30.7279C1.9491 27.3523 0 22.7739 0 18C0 13.2261 1.9491 8.64773 5.41852 5.27208C8.88795 1.89642 13.5935 0 18.5 0C23.4065 0 28.1121 1.89642 31.5815 5.27208C35.0509 8.64773 37 13.2261 37 18ZM27.8194 11.1825C27.6542 11.0223 27.4575 10.8962 27.2411 10.8117C27.0247 10.7272 26.793 10.6861 26.5598 10.6907C26.3267 10.6953 26.0969 10.7456 25.8842 10.8386C25.6715 10.9316 25.4802 11.0654 25.3219 11.232L17.2906 21.1882L12.4505 16.4767C12.1217 16.1787 11.6869 16.0164 11.2375 16.0241C10.7882 16.0318 10.3595 16.2089 10.0417 16.5181C9.72398 16.8273 9.54196 17.2444 9.53403 17.6816C9.5261 18.1188 9.69289 18.5419 9.99925 18.8618L16.1181 24.8175C16.283 24.9776 16.4793 25.1037 16.6953 25.1884C16.9113 25.2731 17.1427 25.3146 17.3755 25.3104C17.6084 25.3062 17.838 25.2564 18.0507 25.164C18.2633 25.0716 18.4547 24.9384 18.6133 24.7725L27.8448 13.545C28.1595 13.2266 28.3334 12.8009 28.3291 12.3592C28.3247 11.9174 28.1426 11.495 27.8217 11.1825H27.8194Z" fill="#1C1C21"/>
                                </svg>
                                </span>
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