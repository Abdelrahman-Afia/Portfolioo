import React from "react";
import "./download.css";
import img1 from "../Assets/Download Icon.png";

const Download = () => {
  return (
    <button className="download-btn">
      <img src={img1} alt="download-icon" className="download-icon" />
      <span className="download-style">Download CV</span>
    </button>
  );
};

export default Download;
