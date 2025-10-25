import React, { useState } from "react";
import "./Projects.css";
import { FaFigma, FaCode, FaPaintBrush, FaWordpress } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// Import images
import uiux1 from "../Images/uiuxdesign1.png";
import ux2 from "../Images/uiuxdesign2.png";
import ux3 from "../Images/uiuxdesign3.png";
import dev1 from "../Images/development1.png";
import dev2 from "../Images/development2.png";
import dev3 from "../Images/development3.png";
import graphic1 from "../Images/politicalposter.png";
import graphic2 from "../Images/socialmedia.png";
import graphic3 from "../Images/zenlogo.svg";
import wp1 from "../Images/wpproject1.png";
import wp2 from "../Images/wpproject2.png";
import wp3 from "../Images/wpproject3.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [popupImage, setPopupImage] = useState(null);

  const categories = [
    {
      icon: <FaFigma />,
      title: "UI/UX Design",
      description:
        "Creative and research-driven user interface designs focused on accessibility, engagement, and modern aesthetics.",
      color: "linear-gradient(135deg, #00bcd4, #ff4d6d)",
      projects: [
        { name: "Movie Booking App", image: uiux1 },
        { name: "FITNESS APP", image: ux2 },
        { name: "HOTEL BOOKING WEBSITE", image: ux3 },
      ],
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Developing fast, responsive, and dynamic web interfaces using React.js, HTML, CSS, and JavaScript frameworks.",
      color: "linear-gradient(135deg, #ff4d6d, #6a00ff)",
      projects: [
        { name: "ZEN4TECH WEBSITE", image: dev1 },
        { name: "MY PORTFOLIO", image: dev2 },
        { name: "BALAJI STEEL INDUSTRIES", image: dev3 },
      ],
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      description:
        "Crafting eye-catching posters, branding, and visual assets using Adobe Illustrator, Photoshop, and After Effects.",
      color: "linear-gradient(135deg, #6a00ff, #00ffd5)",
      projects: [
        { name: "POLITICAL POSTERS", image: graphic1 },
        { name: "SOCIAL MEDIA POSTERS", image: graphic2 },
        { name: "LOGO DESIGNING", image: graphic3 },
      ],
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description:
        "User-friendly websites using WordPress, Elementor, and WooCommerce.",
      color: "linear-gradient(135deg, #00ffd5, #00bcd4)",
      projects: [
        { name: "DROWNSHOW BOOKING WEBSITE", image: wp1 },
        { name: "SOLARPANNEL WEBSITE", image: wp2 },
        { name: "ECOMMERCE WEBSITE", image: wp3 },
      ],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>My Work</h2>
        <h1>Projects & Expertise</h1>
        <p>
          A glimpse into my design and development journey — where creativity
          meets functionality.
        </p>
      </div>

      <div className="projects-grid">
        {categories.map((cat, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon" style={{ background: cat.color }}>
              {cat.icon}
            </div>
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <button
              className="view-btn"
              onClick={() => setSelectedCategory(cat)}
            >
              View Projects
            </button>
          </div>
        ))}
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div
          className="projects-popup"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="projects-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedCategory.title} Showcase</h2>
            <div className="popup-gallery">
              {selectedCategory.projects.map((proj, i) => (
                <div
                  className="popup-project-card"
                  key={i}
                  onClick={() => setPopupImage(proj.image)}
                >
                  <img src={proj.image} alt={proj.name} />
                  <h4>{proj.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {popupImage && (
        <div className="image-fullscreen" onClick={() => setPopupImage(null)}>
          <div className="image-container" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage} alt="Preview" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-text">
            <h1>Let's Connect There</h1>
          </div>
          <a href="/contact" className="hire-btn">
            Hire Me Now!
          </a>
        </div>

        <hr className="footer-divider" />

        <div className="footer-content">
          <div className="footer-column logo-column">
            <h2 className="footer-logo">Sakthivel</h2>
            <p>
              Front-End Developer |<br></br> UI/UX Designer |<br></br> Graphic
              Designer |<br></br> WordPress Developer
            </p>
            <div className="social-icons">
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

          <div className="footer-column">
            <h3>Address</h3>
            <p>Chennai,Tamil Nadu ,India</p>
            <p> angalore,Karanataka,India</p>
          </div>

          <div className="footer-column">
            <h3>Email Address</h3>
            <p>sakthivelchidambaram80@gmail.com</p>
          </div>

          <div className="footer-column">
            <h3>Phone Number</h3>
            <p>91+ 8438319856</p>
            <p>91+ 9123568080</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Tools</a>
        </div>

        <div className="footer-bottom">
          <p>All rights reserved © sakthivel</p>
        </div>
      </footer>
    </section>
  );
};

export default Projects;
