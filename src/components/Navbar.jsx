import React, { useState } from "react";

import "../styles/style.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <header className="Navbar fixed top-0 w-full z-10">
      <div className="container">
        <div className="flex p-[20px] justify-between w-full">
          <div className="w-[20%] logo">DAILY ADVISOR AI</div>
          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden block text-[24px] text-[#FFFFFF]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className="w-[60%] menu hidden lg:flex justify-center">
            <nav className="nav-links flex gap-[10px]">
              <a href="#">ABOUT</a>
              <a href="#">FEATURES</a>
              <a href="#">HOW IT WORKS</a>
              <a href="#">PRICING</a>
              <a href="#">Contact</a>
            </nav>
          </div>

          <div className="w-[20%] text-right hidden lg:block">
            <button
              type="button"
              className="mt-2 px-2 py-1 rounded-sm shadow-sm hover:border bg-[#FFFFFF]"
              onClick={navigateLogin}
            >
              Login
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden w-full bg-white px-6 pb-4">
            <nav className="flex flex-col gap-4 text-[16px]">
              <a href="#">ABOUT</a>
              <a href="#">FEATURES</a>
              <a href="#">HOW IT WORKS</a>
              <a href="#">PRICING</a>
              <a href="#">CONTACT</a>

              <button
                type="button"
                className="mt-2 w-full bg-[#FFFFFF]"
                onClick={navigateLogin}
              >
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
