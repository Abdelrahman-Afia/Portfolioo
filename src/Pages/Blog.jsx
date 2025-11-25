import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Hero from "../Components/Hero.jsx";
import FigmaXD from "../Assets/figma-vs-xd.png";
import TrendCSS from "../Assets/Trend CSS Classes.png";
import WhatIsAPI from "../Assets/What is API.jpg";
import WillAIReplace from "../Assets/Will AI Replace US.jpg";
import SQLvsNOSQL from "../Assets/NOSQL Vs SQL.jpg";
import UITrends from "../Assets/UI Trends.png";
import Nav from "../Components/nav.jsx";
import Footer from "../Components/Footer.jsx";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Figma vs XD",
      tag: "UX/UI",
      image: FigmaXD,
      description:
        "A comprehensive comparison of two popular design tools, helping you choose the right one for your workflow.",
      link: "/blog/1",
    },
    {
      id: 2,
      title: "Trend CSS Classes",
      tag: "Web Development",
      image: TrendCSS,
      description:
        "Explore modern CSS techniques and best practices for creating maintainable and scalable stylesheets.",
      link: "#",
    },
    {
      id: 3,
      title: "What is API?",
      tag: "Web Development",
      image: WhatIsAPI,
      description:
        "Understanding APIs and their crucial role in modern web development and system integration.",
      link: "#",
    },
    {
      id: 4,
      title: "Will AI Replace US",
      tag: "Web Development",
      image: WillAIReplace,
      description:
        "Exploring the impact of AI on the web development industry and what it means for developers.",
      link: "#",
    },
    {
      id: 5,
      title: "NOSQL Vs SQL",
      tag: "Web Development",
      image: SQLvsNOSQL,
      description:
        "A detailed comparison of SQL and NoSQL databases to help you choose the right database for your project.",
      link: "#",
    },
    {
      id: 6,
      title: "UI Trends",
      tag: "UX/UI",
      image: UITrends,
      description:
        "Discover the latest UI design trends shaping the future of web and mobile interfaces.",
      link: "#",
    },
  ];

  return (
    <>
      <Nav />
      <Hero />
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blogs</h1>
          <p className="blog-subtitle">
            Important articles in UX/UI / Web Development Field
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="blog-card-image"
              />
              <div className="blog-card-content">
                <span className="blog-card-tag">{post.tag}</span>
                <h2>{post.title}</h2>
                <p className="blog-card-description">{post.description}</p>
                <Link to={post.link} className="blog-card-link">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
