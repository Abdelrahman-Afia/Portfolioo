import React from "react";
import "./Section1.css";
import Card from "./Card";
import educationIcon from "../Assets/Education.png";
import courseworkIcon from "../Assets/Coursework.png";

const Section1 = () => {
  const educationItems = [
    "Egypt University Of Informatics (EUI)",
    "Bachelor's Degree in UX/UI Design",
    "2022 - Present",
  ];

  const courseworkItems = [
    "UX/UI Design",
    "Front-End Development",
    "AR Experience",
    "Adobe Suite",
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <h1>
          About <span>Me</span>
        </h1>
        <p className="about-description">
          Full-Stack Developer with a strong UX/UI background, skilled in
          building responsive and user-friendly web applications using modern
          front-end and back- end technologies. Passionate about creating
          seamless digital experiences.
        </p>
        <div className="cards-container">
          <Card icon={educationIcon} title="Education" items={educationItems} />
          <Card
            icon={courseworkIcon}
            title="Coursework"
            items={courseworkItems}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
