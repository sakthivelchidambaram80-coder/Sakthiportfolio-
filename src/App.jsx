import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Skils from "./Pages/Skils";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
// import Footer from "./Pages/Footer"; // ✅ fixed import

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/Skils" element={<Skils />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Footer /> ✅ common footer on all pages */}
    </Router>
  );
}

export default App;

