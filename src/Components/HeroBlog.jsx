import React from "react";
import "./Hero.css";
import AnimatedBg from "../Assets/Animated Background.mp4";

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="background-video">
        <source src={AnimatedBg} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Insights & Innovations.</h1>
        <p>Exploring the future of design, technology, and user experience.</p>
        <button className="contact-button">
          Contact Now <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
