import React from "react";
import "./download.css";
import img1 from "../Assets/Download Icon.png";

const Download = () => {
  return (
    <>
      <div className="download-btn">
        <img src={img1} alt="download-icon" className="download-icon" />
        <p className="download-style">Download CV</p>
      </div>
    </>
  );
};

export default Download;
