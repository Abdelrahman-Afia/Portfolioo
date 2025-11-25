import React from "react";
import "./BlogPage.css";
import Nav from "../Components/nav.jsx";
import Hero from "../Components/HeroContact.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import Footer from "../Components/Footer.jsx";

const Contactpage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contactpage;
