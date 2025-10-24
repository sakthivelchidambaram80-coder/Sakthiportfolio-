import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-text">
          <h1>
            Let's Connect  There
          </h1>
        </div>
        <button className="hire-btn">Hire Me Now!</button>
      </div>

      <hr className="footer-divider" />

      <div className="footer-content">
        <div className="footer-column logo-column">
          <h2 className="footer-logo">Sakthivel</h2>
          <p>
            Front-End Developer |<br></br> UI/UX Designer |<br></br> Graphic Designer |<br></br> WordPress Developer
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaWhatsapp />
            
          </div>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>Chennai,Tamil Nadu ,India</p>
          <p> Bengaluru,Karanataka,India</p>
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
  );
};

export default Footer;
