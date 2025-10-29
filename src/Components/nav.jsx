import React, { useState } from "react";
import "./nav.css";
import img1 from "../Assets/Logo.svg";
import Download from "./download.jsx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <img src={img1} alt="Logo" className="logo-icon" />

      <button className="burger-menu" onClick={toggleMenu}>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`burger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <div className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-links">
          <a href="#home" className="nav-text">
            Home
          </a>
          <a href="#about" className="nav-text">
            About
          </a>
          <a href="#portfolio" className="nav-text">
            Portfolio
          </a>
          <a href="#blog" className="nav-text">
            Blog
          </a>
          <a href="#contact" className="nav-text">
            Contact
          </a>
        </div>
        <div className="mobile-download">
          <Download />
        </div>
      </div>

      <div className="desktop-nav">
        <div className="nav-links">
          <a href="#home" className="nav-text">
            Home
          </a>
          <a href="#about" className="nav-text">
            About
          </a>
          <a href="#portfolio" className="nav-text">
            Portfolio
          </a>
          <a href="#blog" className="nav-text">
            Blog
          </a>
          <a href="#contact" className="nav-text">
            Contact
          </a>
        </div>
        <Download />
      </div>
    </nav>
  );
};

export default Nav;
