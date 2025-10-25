import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./Contact.css";
import "./contact.css";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywiid0l",    // e.g. "service_xxxxxx"
        "template_nltr8vq",   // e.g. "template_yyyyyy"
        form.current,
        "NDi2FNORP2EvCUlxC"     // e.g. "abc123PUBLICKEY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-wrapper">
        {/* Left Section */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's Talk</h3>
          <p className="contact-text">
            I'm open to discussing web development projects or partnership opportunities.
          </p>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p>sakthivelchidambaram80@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Chennai, India</p>
          </div>
        </div>

        {/* Right Section */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Your Name</label>
          <input type="text" name="user_name" placeholder="Enter Your Name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter Your Email" required />

          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="btn-send">Send</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <h4>Sakthivel.c</h4>
        <p>
          Front-End Developer based in India, specializing in web and WordPress development.
        </p>
        <div className="subscribe-section">
          <input type="email" placeholder="Your email" />
          <button className="btn-subscribe">Subscribe</button>
        </div>
        <p className="footer-rights">© 2025 Sakthivel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
