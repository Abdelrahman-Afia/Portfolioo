import React, { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import Nav from "../Components/nav.jsx";
import Footer from "../Components/Footer.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import Hero from "../Components/Hero.jsx";
import taskly from "../Assets/Taskly.jpg";
import district13 from "../Assets/District 13.jpg";
import adventour from "../Assets/Adventour.jpg";
import freshFork from "../Assets/Fresh Fork.jpg";
import cairoContract from "../Assets/Cairo Contract.jpg";
import gizaZoo from "../Assets/Giza Zoo.jpg";
import eventour from "../Assets/Eventour.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Taskly",
      category: "UX-UI Design",
      subcategory: "Productivity",
      image: taskly,
      link: "/taskly",
    },
    {
      title: "District 13",
      category: "UX-UI Design",
      subcategory: "E-commerce",
      image: district13,
    },
    {
      title: "Adventour",
      category: "UX-UI Design",
      subcategory: "Travel Booking",
      image: adventour,
    },
    {
      title: "Fresh Fork",
      category: "UX-UI Design",
      subcategory: "Recipe Suggestion",
      image: freshFork,
    },
    {
      title: "Cairo Contract",
      category: "Web Development",
      subcategory: "Petrol",
      image: cairoContract,
    },
    {
      title: "Giza Zoo",
      category: "Web Development",
      subcategory: "Tourism",
      image: gizaZoo,
    },
    {
      title: "Eventour",
      category: "UX-UI Design",
      subcategory: "Event Planning",
      image: eventour,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <>
      <Nav />
      <Hero />
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>Featured Projects</h1>
          <p>Digital Products Showcases</p>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
              onClick={() => setActiveFilter("All")}
            >
              All
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "Web Development" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("Web Development")}
            >
              Web Development
            </button>
            <button
              className={`filter-btn ${
                activeFilter === "UX-UI Design" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("UX-UI Design")}
            >
              UX-UI Design
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.subcategory}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
