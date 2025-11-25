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
        <h1>The Mind Behind the Interface.</h1>
        <p>Bridging the gap between complex code and intuitive design.</p>
        <button className="contact-button">
          Contact Now <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
