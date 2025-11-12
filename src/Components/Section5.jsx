import React from "react";
import { Link } from "react-router-dom";
import "./Section5.css";
import ProjectCard from "./ProjectCard";

// Import project images
import Taskly from "../Assets/Taskly.jpg";
import District13 from "../Assets/District 13.jpg";
import Adventour from "../Assets/Adventour.jpg";
import FreshFork from "../Assets/Fresh Fork.jpg";
import CairoContract from "../Assets/Cairo Contract.jpg";
import GizaZoo from "../Assets/Giza Zoo.jpg";

const Section5 = () => {
  const projects = [
    {
      image: Taskly,
      title: "Taskly",
      category: "Productivity",
      link: "/taskly",
    },
    {
      image: District13,
      title: "District 13",
      category: "E-Commerce",
    },
    {
      image: Adventour,
      title: "Adventour",
      category: "Travel Booking",
    },
    {
      image: FreshFork,
      title: "Fresh Fork",
      category: "Recipe Suggestion",
    },
    {
      image: CairoContract,
      title: "Cairo Contract",
      category: "Petrol",
    },
    {
      image: GizaZoo,
      title: "Giza Zoo",
      category: "Tourism",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Digital Products Showcases</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <button className="view-more-btn">
              View More
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83334 14.1667L14.1667 5.83334M14.1667 5.83334H5.83334M14.1667 5.83334V14.1667"
                  stroke="currentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section5;
