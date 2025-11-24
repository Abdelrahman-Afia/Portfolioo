import React from "react";
import "./SkillBar.css";

const SkillBar = ({ icon, name, category, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <img src={icon} alt={name} className="skill-icon" />
        <div className="skill-details">
          <div className="skill-category">{category}</div>
          <div className="skill-name">{name}</div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
