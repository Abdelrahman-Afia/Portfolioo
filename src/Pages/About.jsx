import React from "react";
import "./About.css";
import Nav from "../Components/nav.jsx";
import Hero from "../Components/Hero.jsx";
import Footer from "../Components/Footer.jsx";
import Skills from "../Components/Skills.jsx";
import Afia from "../Assets/Afia.png";
import Card from "../Components/Card";
import educationIcon from "../Assets/Education.png";
import courseworkIcon from "../Assets/Coursework.png";

const About = () => {
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
    <>
      <Nav />
      <Hero />
      <div className="about-container">
        <div className="about-header">
          <h1>
            About <span className="highlight">Me</span>
          </h1>
          <p className="about-description">
            Full-Stack Developer with a strong UX/UI background, skilled in
            building responsive and user-friendly web applications using modern
            front-end and back-end technologies. Passionate about creating
            seamless digital experiences.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={Afia} alt="Profile-img" className="Profile-img" />
      </div>
      <Skills />
      <div className="cards-container">
        <Card icon={educationIcon} title="Education" items={educationItems} />
        <Card
          icon={courseworkIcon}
          title="Coursework"
          items={courseworkItems}
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
