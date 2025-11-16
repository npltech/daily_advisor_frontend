import React, { useState } from "react";
import login from "../assets/images/login.png";
import welcome3 from "../assets/images/welcome3.png";
import welcome2 from "../assets/images/welcome2.png";
import welcome1 from "../assets/images/welcome1.png";
import wel from "../assets/images/wel.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex justify-center bg-[#ffffff] p-[40px] m-[40px]">
      <div className="welcome-sty w-[900px] bg-white border border-blue-200 rounded-2xl shadow-sm p-10 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-yellow-300 rounded-lg mb-4">
          <div className="star-icon">
            <img src={login} alt="Login Icon" className="w-auto" /></div>
        </div>

        <h1 className="text-[24px] font-[700] text-[#0A0A0A]-900 leading-[28px] py-[10px]">
          Welcome to Daily Advisor AI
        </h1>
        <p className="text-{#4B5563}-500 mt-2 text-[14px] leading-[18px] w-2/3 mx-auto">
          You’re about to experience AI coaching that’s different. Let’s set up your personalized journey in just 3 quick steps.
        </p>
 {/* Features */}
       <div className="flex flex-row justify-between gap-[24px] mt-[30px] text-left">
          {/* Card 1 */}
          <div className="p-[24px] border-[2px] border-[#BEDBFF] rounded-[16px] bg-[#EFF5FF] w-1/3">
            <div className="flex items-center mb-2">
              <img src={welcome3} alt="Login Icon" className="w-auto" /></div>
              <h3 className="font-[500] text-[#0A0A0A]-800 text-[16px] leading-[20px] py-[10px]">Goal-Driven Insights</h3>
            
            <p className="text-[12px] text-[#4B5563] font-[400] leading-[16px]">
              Every conversation ties back to your personal and professional goals.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-[24px] border-[2px] border-[#E9D4FF] rounded-[16px] bg-[#F9F2FF] w-1/3">
            <div className="flex items-center mb-2">
              <img src={welcome1} alt="Login Icon" className="w-auto" /></div>
              <h3 className="font-[500] text-[#0A0A0A]-800 text-[16px] leading-[20px] py-[10px]">Personalized Coaching</h3>
            
            <p className="text-[12px] text-[#4B5563] font-[400] leading-[16px]">
              AI that learns your patterns, preferences, and communication style
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-[24px] border-[2px] border-[#B9F8CF] rounded-[16px] bg-[#F4FFF8] w-1/3">
            <div className="flex items-center mb-2">
              <img src={welcome2} alt="Login Icon" className="w-auto" /></div>
              <h3 className="font-[500] text-[#0A0A0A]-800 text-[16px] leading-[20px] py-[10px]">Continuous Growth</h3>
            
            <p className="text-[12px] text-[#4B5563] font-[400] leading-[16px]">
              Daily check-ins and progress tracking to keep you moving forward
            </p>
          </div>
        </div>

        {/* Card 4 */}
          <div className="w-full p-[24px] border-[2px] border-[#E5F2FF] rounded-[16px] bg-[#F8FAFC] mt-[20px]">
              <h3 className="font-[500] text-left text-[#0A0A0A]-800 text-[16px] leading-[20px] py-[10px]">What makes Daily Advisor AI different?</h3>
            
            <p className="text-[12px] text-left text-[#4B5563] font-[400] leading-[16px]">
              Unlike generic AI chatbots, we start by understanding you—your goals, your challenges, and your aspirations. This onboarding creates a foundation for truly personalized coaching that evolves with you every day.
            </p>
          </div>
          <div className="btn-welcome mt-[40px]">
            <button className="btnwel  bg-[#1E3A8A] py-[10px] px-[24px] text-[14px] leading-[18px] border-[#1E3A8A] text-[#ffffff] rounded-[8px]">
              Let's Get Started
              <img src={wel} alt="Wel Icon" className="w-auto" />
            </button>
            <Link to="/user/onboarding" className="btnwel">Onboarding</Link>     
          </div>
          </div>
 
        </div>
        
  )
}

export default Welcome