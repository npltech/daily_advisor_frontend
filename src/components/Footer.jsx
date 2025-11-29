import React from "react";
import Sociallinks from "../assets/images/Sociallinks.png";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#1E3A8A] pb-8">
      <div>
        <h2 className="text-lg font-bold tracking-wide">DAILY ADVISOR AI</h2>
        <p className="footer-text text-[14px] text-[#fff] font-[300] leading-[18px] mt-2 max-w-xs leading-relaxed">
          DailyAdvisorAI — Your AI-powered daily companion for life and business
          growth.
        </p>
      </div>

      <div className="w-full flex justify-center md:justify-center">
        <ul className="w-full menu-item flex gap-[56px] text-sm text-[#fff]-200">
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              Home
            </a>
          </li>
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              About
            </a>
          </li>
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              Features
            </a>
          </li>
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              Pricing
            </a>
          </li>
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              How It Works
            </a>
          </li>
          <li className="w-[100px]">
            <a
              href="#"
              className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="social-img">
          <img src={Sociallinks} alt="Social" />
        </div>
      </div>

      <div className="bottom-footer flex text-[#fff] font-[400] text-[10px] text-center justify-center leading-[14px] pt-[40px]">
        <p>©2022. All right reserved.</p>
        <a href="#" className="text-[#fff] hover:text-[#fff] no-underline">
          Privacy Policy
        </a>
        <a href="#" className="text-[#fff] hover:text-[#fff] no-underline">
          Terms of Service
        </a>
      </div>
    </div>
  );
};

export default Footer;
