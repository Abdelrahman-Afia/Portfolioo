import React from "react";
import "./Taskly.css";
import Nav from "../Components/nav.jsx";
import Footer from "../Components/Footer.jsx";
import tasklyImage from "../Assets/Taskly.jpg";

const Taskly = () => {
  return (
    <>
      <Nav />
      <div className="project-container">
        <div className="project-header">
          <h1>Taskly</h1>
          <p className="project-subtitle">Mobile UI Design</p>
        </div>

        <img
          src={tasklyImage}
          alt="Taskly App Mockup"
          className="showcase-image"
        />

        <div className="project-details-grid">
          <div className="detail-card overview-card">
            <h2>Project Overview</h2>
            <p>
              An intuitive task management app designed to boost productivity by
              helping users efficiently organize daily to-dos, set priorities,
              and track goals.
            </p>
            <button className="view-design-btn">View Design</button>
          </div>

          <div className="detail-card role-card">
            <h2>My Role</h2>
            <p>
              I was responsible for the end-to-end user interface design,
              transforming the app's core features—task organization, priority
              setting, and goal tracking—into a clean, intuitive, and visually
              engaging user experience.
            </p>
          </div>

          <div className="detail-card tech-card">
            <h2>Technologies Used</h2>
            <ul className="tech-list">
              <li>- Adobe Photoshop</li>
              <li>- Figma</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Taskly;
