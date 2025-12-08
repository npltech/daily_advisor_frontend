import React, { useEffect, useState } from "react";

import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import creategoal from "../assets/images/creategoal.png";

const Navbar = (props) => {
  const {scrollToAbout, scrollToFeatures, scrollToWorks, scrollToPricing, scrollToContact, toggleLoginForm} = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateLogin = () => {
    // navigate("/login");
    toggleLoginForm(true);
  };

  return (
    <header className={`Navbar fixed top-0 w-full z-10 pt-3 ${scrolled?'bg-[#FFFFFF]':''}`}>
      <div className="container1 px-[60px]">
        <div className="flex items-center p-[20px] justify-between w-full">
          <div className={`w-[20%] logo hidden md:block ${scrolled?'text-[#1E3A8A]':'text-[#FFFFFF]'}`}>DAILY ADVISOR AI</div>
          <div className={`w-[20%] logo block md:hidden ${scrolled?'text-[#1E3A8A]':'text-[#FFFFFF]'}`}>
            <img src={creategoal} alt="Create Icon" className="w-8 h-8" />
          </div>
          {/* Mobile Toggle Button */}
          <button
            className={`lg:hidden block text-[24px] ${scrolled?'text-[#000000]':'text-[#FFFFFF]'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className="w-[60%] menu hidden lg:flex justify-center">
            <nav className="nav-links flex gap-[10px]">
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToAbout}
              >ABOUT</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToFeatures}
              >FEATURES</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToWorks}
              >HOW IT WORKS</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToPricing}
              >PRICING</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToContact}
              >CONTACT</p>
            </nav>
          </div>

          <div className="w-[20%] text-right hidden lg:block">
            <button
              type="button"
              className={`px-6 py-2 rounded-md shadow-sm text-sm font-bold text-[#1E3A8A] ${scrolled?'text-[#FFFFFF] bg-[#1E3A8A]':'text-[#1E3A8A] bg-[#FFFFFF]'}`}
              onClick={navigateLogin}
            >
              Login
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden w-full bg-white px-6 pb-4">
            <nav className="flex flex-col gap-4 text-[16px] pt-[16px]">
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToAbout}
              >ABOUT</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToFeatures}
              >FEATURES</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToWorks}
              >HOW IT WORKS</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToPricing}
              >PRICING</p>
              <p className="text-[#0A0A0A] text-xs font-bold cursor-pointer"
                onClick={scrollToContact}
              >CONTACT</p>

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
