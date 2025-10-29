import React from "react";
import "./Section4.css";
import Skills from "./Skills";

const Section4 = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>
            I bring a holistic approach to product development, blending
            creative design with clean, functional code to build complete
            digital solutions from start to finish.
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Section4;
