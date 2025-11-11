import React from "react";

import "../styles/style.css";


const Navbar = () => {
  return (
    <header className="Navbar fixed top-0 z-2 w-full">
         <div className="container">
            <div className="flex p-[20px] justify-between w-full">
        <div className="w-[20%] logo">DAILY ADVISOR AI</div>

        <div className="w-[60%] menu">
        <nav className="nav-links  justify-center">
          <a href="#">ABOUT</a>
          <a href="#">FEATURES</a>
          <a href="#">HOW IT WORKS</a>
          <a href="#">PRICING</a>
        </nav>
        </div>

          <div className="w-[20%] text-right">
           <button className="contact-btn">CONTACT</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar