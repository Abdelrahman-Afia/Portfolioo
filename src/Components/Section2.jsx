import React from "react";
import "./Section2.css";
import PlayButton from "../Assets/Play Button.png";

const Section2 = () => {
  return (
    <section className="showreel-section">
      <div className="container">
        <h2 className="showreel-title">Showreel</h2>
        <div className="video-container">
          <div className="video-player">
            <img src={PlayButton} alt="Play Video" className="play-button" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
