import React from "react";
import bgImage from "../assets/bg.png";
import "../styles/style.css";


const Navbar = () => {
  return (
    <header className="Navbar"  style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}>
         <div className="container">
            <div className="flex">
        <div className="w-20 logo">DAILY ADVISOR AI</div>

        <div className="w-60 menu">
        <nav className="nav-links">
          <a href="#">ABOUT</a>
          <a href="#">FEATURES</a>
          <a href="#">HOW IT WORKS</a>
          <a href="#">PRICING</a>
        </nav>
        </div>

        <button className="w-20 contact-btn">CONTACT</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar