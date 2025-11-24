import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="nav-text">
            Home
          </Link>
          <Link to="/about" className="nav-text">
            About
          </Link>
          <Link to="/portfolio" className="nav-text">
            Portfolio
          </Link>
          <Link to="/blog" className="nav-text">
            Blog
          </Link>
          <Link to="/contact" className="nav-text">
            Contact
          </Link>
        </div>
        <div className="mobile-download">
          <Download />
        </div>
      </div>

      <div className="desktop-nav">
        <div className="nav-links">
          <Link to="/" className="nav-text">
            Home
          </Link>
          <Link to="/about" className="nav-text">
            About
          </Link>
          <Link to="/portfolio" className="nav-text">
            Portfolio
          </Link>
          <Link to="/blog" className="nav-text">
            Blog
          </Link>
          <Link to="/contact" className="nav-text">
            Contact
          </Link>
        </div>
        <Download />
      </div>
    </nav>
  );
};

export default Nav;
