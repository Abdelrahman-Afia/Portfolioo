import React from "react";
import "./Home.css";
import Nav from "../Components/nav.jsx";
import Hero from "../Components/Hero.jsx";
import Section1 from "../Components/Section1.jsx";
import Section2 from "../Components/Section2.jsx";
import Section3 from "../Components/Section3.jsx";
import Section4 from "../Components/Section4.jsx";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
