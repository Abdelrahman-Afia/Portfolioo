import React from "react";
import SkillBar from "./SkillBar";
import "./Skills.css";
import JavaScriptIcon from "../Assets/JavaScript.png";
import TypeScriptIcon from "../Assets/TypeScript.png";
import ReactIcon from "../Assets/React.png";
import HTMLIcon from "../Assets/HTML.png";
import CSSIcon from "../Assets/CSS.png";
import TailwindIcon from "../Assets/Tailwind.png";
import NodeIcon from "../Assets/Node.Js.png";
import MongoDBIcon from "../Assets/MongoDB.png";
import FigmaIcon from "../Assets/Figma.png";

const Skills = () => {
  const skillsData = [
    {
      icon: JavaScriptIcon,
      name: "JavaScript",
      category: "Language",
      percentage: 85,
    },
    {
      icon: HTMLIcon,
      name: "HTML",
      category: "Structure",
      percentage: 95,
    },
    {
      icon: NodeIcon,
      name: "Node.js",
      category: "Server-Side",
      percentage: 85,
    },
    {
      icon: TypeScriptIcon,
      name: "TypeScript",
      category: "Language",
      percentage: 80,
    },
    {
      icon: CSSIcon,
      name: "CSS",
      category: "Styling",
      percentage: 95,
    },
    {
      icon: MongoDBIcon,
      name: "MongoDB",
      category: "NoSQL Database",
      percentage: 85,
    },
    {
      icon: ReactIcon,
      name: "React.js",
      category: "Framework",
      percentage: 90,
    },
    {
      icon: TailwindIcon,
      name: "Tailwind CSS",
      category: "Library",
      percentage: 85,
    },
    {
      icon: FigmaIcon,
      name: "Figma",
      category: "Prototyping",
      percentage: 85,
    },
  ];

  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <SkillBar
          key={index}
          icon={skill.icon}
          name={skill.name}
          category={skill.category}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default Skills;
