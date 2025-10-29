import React from "react";
import "./Card.css";

const Card = ({ icon, title, items }) => {
  return (
    <div className="info-card">
      <div className="card-header">
        <img src={icon} alt={title} className="card-icon" />
        <h3>{title}</h3>
      </div>
      <div className="card-items">
        {items.map((item, index) => (
          <p key={index} className="card-item">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
