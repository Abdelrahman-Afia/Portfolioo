import React from "react";
import "./ProjectCard.css";
import Arrow from "../Assets/Project Arrow.png";

const ProjectCard = ({ image, title, category }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
        <div className="project-arrow">
          <img src={Arrow} alt="View project" className="project-arrow-img" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
