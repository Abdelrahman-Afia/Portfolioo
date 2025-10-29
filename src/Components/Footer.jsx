import React from "react";
import "./Footer.css";
import Behance from "../Assets/Behance.png";
import LinkedIn from "../Assets/LinkedIn.png";
import Dribbble from "../Assets/Dribbble.png";
import Github from "../Assets/Github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-header">
            <h2>
              Contact <span>Info</span>
            </h2>
          </div>
          <div className="footer-main">
            <h3>
              Follow <span>Me</span>
            </h3>
            <p className="email">Email: contact@abdelrahmanafia.com</p>
            <p className="phone">Phone: 01099608992</p>
          </div>
          <div className="social-links">
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Behance} alt="Behance" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dribbble} alt="Dribbble" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Abdelrahman Afia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
