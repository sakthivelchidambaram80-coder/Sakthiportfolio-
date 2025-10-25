import React from "react";
import "./Home.css";
import { FaCode, FaPaintBrush, FaWordpress } from "react-icons/fa";
import photo from "../Images/home.svg";
import { FaReact } from "react-icons/fa";
import figma from "../Images/figma.webp";
import react from "../Images/react.jpg";
import photoshop from "../Images/photoshop.jpg";
import illustrator from "../Images/illustrator.png";
import Aftereffect from "../Images/Aftereffect.png";
import visualstudio from "../Images/Visualstudio.png";
import javascript from "../Images/javascript.webp";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { Link } from "react-router-dom";



const Home = () => {
   const cards = [
    {
      
      title: "Front-End Development",
      desc: "Strategic and creative front-end development to craft engaging user interfaces, enhance user experience, and drive meaningful interactions.",
      
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and visually compelling interfaces that delight users and elevate experiences.",
    },
    {
      title: "Graphic Design",
      desc: "Creating visually striking designs that communicate your brand’s story and captivate your audience.",
      dark: true,
    },
    {
      title: "WordPress Development",
      desc: "Building dynamic, responsive, and easy-to-manage websites that bring your ideas to life.",
    },
  ];
  return (  
    <div>
    <div className="home">
      <div className="homesection">
        <h1>Product</h1>
        <h2>Developer</h2>
        <p>
         Front-End Developer | UI/UX Designer <br></br>| Graphic Designer | WordPress Developer
        </p>
        <a href="/projects" className="btn">View My Work</a>
      </div>
      <div className="contentbox">
        <img className="img" src={photo} alt="photo" />
        
        <h4> Hey there,I'm Sakthivel</h4>
        <p> A creative developer passionate about building meaningful<br></br> digital products that connect ideas, design, and technology.</p>
      </div>      
    </div>

    <div className="about">

  <section className="about-section" id="about">
    <div className="about-intro">
      <h5>About Me</h5>
      <h1>Design. Develop. Delight.</h1>
      <p>
        Passionate about building seamless digital experiences that engage users & elevate brands.
      </p>
    </div>

    <div className="about-content" id="about">
      <div className="about-text">
        <p>
          As an aspiring <strong>UI/UX Designer</strong> and <strong>Frontend Developer</strong> with a foundation in 
              user-centric design and WordPress development, I focus on delivering seamless, 
              responsive, and visually engaging digital interfaces. 
        </p>
        <p>
           Proficient in <strong>Figma, WordPress, and Adobe Creative Suite</strong>, I bring a balance 
              of creativity and functionality to every project. I enjoy transforming ideas 
              into intuitive, high-quality web and mobile experiences.
        </p>
        <p>My expertise spans across Figma, Adobe Creative Suite (Illustrator, Photoshop, After Effects), and WordPress, along with strong skills in HTML5, CSS3, JavaScript, React.js. I focus on building intuitive user interfaces, optimizing user journeys, and developing scalable front-end systems that perform beautifully across all devices.</p>
        <p>Over the years, I’ve successfully designed and delivered projects in sectors like real estate, hospitality, and sustainability, including platforms such as Vattara – Real Estate App, Jal Shakthi – Water Management System, and multiple WordPress-based websites for business clients. My approach combines design thinking, user research, and modern development practices to create experiences that not only look great but work effortlessly.</p>
      </div>

      <div className="about-card">
        <h2 >Qualification</h2>
        <div className="skills">
          <section className="about-section" id="about">
     
      <div className="timeline">
      

        <div className="timeline-item">
          <div className="timeline-dot" style={{ background: "linear-gradient(#7d00ff, #ff0077)" }}></div>
          <div className="timeline-content">
            <h3>Vels University</h3>
                  <p>Bachelor of Computer Applications (BCA) — Graduated in 2023</p>
                </div>
                <span className="timeline-date">2020 – 2023</span>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" style={{ background: "linear-gradient(#ff0000, #ff8800)" }}></div>
          <div className="timeline-content">
            <h3>Certified UI/UX Designer</h3>
                  <p>Completed Professional UI/UX Certification from UxMint, 2023.</p>
                </div>
                <span className="timeline-date">2023</span>
        </div>

          <div className="timeline-item">
          <div className="timeline-dot" style={{ background: "linear-gradient(#0000ff, #ff0000)" }}></div>
          <div className="timeline-content">
            <h3>UI/UX Designer & WordPress Developer (Internship)</h3>
            <p>
              Zeal Zoft Pvt. Ltd — Designed responsive UI & developed websites using WordPress and Elementor
            </p>
          </div>
          <span className="timeline-date">2024</span>
        </div>
      </div>
    </section>
        </div>
      </div>
    </div>
  </section> 

</div>



    <div>
      <section className="services-section" id="services">
      <div className="services-left">
        <h3> Skill & Services</h3>
        <h1>
          Transforming Ideas Into Digital Reality
        </h1>
        <p>
          We combine creativity and technology to build solutions that make a difference..
        </p>
        
        <a href="/projects" className="btn-primary">MY PROJECTS</a>
        
      </div>

      <div className="services-right">
        {cards.map((card, index) => (
          <div key={index} className={`service-card ${card.dark ? "dark" : ""}`}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <span className="arrow"><Link to="/projects" style={{textDecoration:"none", color:"white"}}>↗</Link></span>
          </div>
        ))}
      </div>
    </section>

    </div>


    <div className="abouttools">

      <section className="toolssection" id="about">
      <div className="tools-intro">
       <h5>Tools & Technology</h5>      
    </div>
    <div className="card-tools">

      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={figma} alt="icon" />
            <h4>Figma</h4>
      </div>      
      </div>  

      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={photoshop} alt="icon" />
            <h4>photoshop</h4>
      </div>      
      </div>  
      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={illustrator} alt="icon" />
            <h4>illustrator</h4>
      </div>      
      </div>  
      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={Aftereffect} alt="icon" />
            <h4>Aftereffect</h4>
      </div>      
      </div>  
      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={visualstudio} alt="icon" />
            <h4>visualstudio</h4>
      </div>      
      </div>  
      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={javascript} alt="icon" />
            <h4>javascript</h4>
      </div>      
      </div>  
      <div className="toolst-content"> 
      <div className="tools-card">   
            <img src={react} alt="icon" />
            <h4>React JS</h4>
      </div>      
      </div>       

        </div>

  
     </section> 

  </div>
   <footer className="footer">
        <div className="footer-top">
          <div className="footer-text">
            <h1>
              Let's Connect  There
            </h1>
          </div>
           <a href="/contact" className="hire-btn">Hire Me Now!</a>
          
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
            <p> Bangalore,Karanataka,India</p>
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



    </div>
  );
};

export default Home;
