import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contactpage from "./Pages/Contactpage";
import BlogPage from "./Pages/BlogPage";
import Taskly from "./Pages/Taskly";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/taskly" element={<Taskly />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
