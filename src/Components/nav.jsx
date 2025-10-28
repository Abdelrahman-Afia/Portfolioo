import React from "react";
import "./nav.css";
import img1 from "../Assets/Logo.svg";
import Download from "./download.jsx";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <img src={img1} alt="Logo" className="logo-icon" />
        <div className="nav-links">
          <p className="nav-text">Home</p>
          <p className="nav-text">About</p>
          <p className="nav-text">Portfolio</p>
          <p className="nav-text">Blog</p>
          <p className="nav-text">Contact</p>
        </div>
        <Download />
      </div>
    </>
  );
};

export default Nav;
