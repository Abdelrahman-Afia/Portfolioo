import React from "react";
import "./Section3.css";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-icon" />
      <h3>{title}</h3>
    </div>
  );
};

const Section3 = () => {
  const services = [
    {
      icon: require("../Assets/Web Development.png"),
      title: "Web Development",
    },
    {
      icon: require("../Assets/UX-UI Design.png"),
      title: "UX-UI Design",
    },
    {
      icon: require("../Assets/Product Design.png"),
      title: "Product Design",
    },
    {
      icon: require("../Assets/Branding Design.png"),
      title: "Branding Design",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2>
            What I <span>Offer</span>
          </h2>
          <p>BUILDING MEANINGFUL DIGITAL EXPERIENCES. FROM CONCEPT TO CODE.</p>
          <p className="subtitle">
            At my core, I believe success isn't just about delivering a product,
            it's about building relationships and making a meaningful, lasting
            impact for my clients.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
