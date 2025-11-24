import React from "react";
import "./download.css";
import img1 from "../Assets/Download Icon.png";

const Download = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1pfkgoSSaHGt448Lzk8p_aLh_oRn693yw/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="download-btn">
        <img src={img1} alt="download-icon" className="download-icon" />
        <span className="download-style">Download CV</span>
      </button>
    </a>
  );
};

export default Download;
