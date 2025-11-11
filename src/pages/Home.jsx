import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import component2 from "../assets/component2.png";
import component3 from "../assets/component3.png";
import component4 from "../assets/Mask.png";
import dashboard from "../assets/dashboard.png";
import { FaCheck } from "react-icons/fa";
import browser from "../assets/browser.png";
import { Container } from "postcss";
import habit from "../assets/habit.png";
import percent from "../assets/percent.png";
import icon1 from "../assets/icon1.png";
import "../styles/style.css";
import icon2 from "../assets/icon2.png";
import icon from "../assets/icon.png";
import email from "../assets/email.png";
import message from "../assets/message.png";
import Sociallinks from "../assets/Sociallinks.png";
import bgImage from "../assets/banner.png";
import abouticon from "../assets/abouticon.png";
import bannertop from "../assets/bannertop.png";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Banner section */}
      <section className="banner z-1 bg-[length:100%_auto] bg-no-repeat bg-top-center"  style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="banner-top-content pt-[200px]">
          <img src={bannertop} alt="Banner Top" />
          <h3 className="">Personalized AI Coach</h3>
          <div className="banner-content pt-[200px]">
          <h2>Your Daily AI Advisor for Life & Business</h2>
          <p>Beyond generic AI. Get structured onboarding, personalized coaching, and goal-driven insights tailored to your unique journey.</p>
          <button className="first">Get Started</button>
          <button className="second">REQUEST DEMO</button>
          </div>
          </div>
         <div className="banner-image">
          <img src={dashboard} alt="Banner Image" />
        </div>
      </section>
  

      {/* About Us Section */}
      <section className="about-us flex"> 
        <div className="about-us-content flex flex-col ">
  <h3 className="text-2xl font-semibold">ABOUT US</h3>
  <p className="text-gray-700">
    Daily Advisor AI is built to understand your goals, track your progress, and offer daily insights that keep you moving forward.
  </p>

 <ul className="about-list">
  {[
    "Personalized setup to understand your goals and context",
    "Proactive guidance every day, not just on-demand",
    "Track progress and adjust plans based on your journey",
    "AI that learns and adapts to your unique needs",
    "Visual insights into your growth and habits",
  ].map((text, index) => (
    <li key={index} className="flex items-start gap-4">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F8FAFC]">
        <FaCheck className="text-[#097153] text-[10px] translate-y-[0.5px] mx-auto block" />
      </span>
      <span className="text-[#334155] text-[15px] leading-relaxed">{text}</span>
    </li>
  ))}
</ul>
</div>
         <div className="about-image-one">
          <img src={component3} alt="About us" />
          <div className="about-box">
            
            <div class="abouticon">
              <img src={abouticon} alt="About-icon" />
              <h3 className="">Smart Insights</h3>
              <p className="">AI analyzes your patterns and provides actionable recommendations to optimize your day.</p>
            </div>
            <div className="about-second">
            <img src={component2} alt="About us" />
            </div>
          </div> 
            <img src={component4} alt="About us" /> 
          </div>
        
      </section>

<section className="Features py-[20px]">
  <div className="features-bg-img bg-[url('/src/assets/features.png')] bg-no-repeat bg-cover bg-top py-[16px] px-6">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-[32px] font-bold text-gray-700">FEATURES</h2>
      <p className="text-[14px] text-[#4B5563] mt-2">
        A complete ecosystem for personal and professional growth, designed to fit seamlessly into your daily routine.
      </p>
    </div>

    {/* Features Grid */}
    <div className="daily-check">
      {/* Daily Check-ins */}
      <div className="md:col-span-2 bg-[url('/src/assets/daily.png')] bg-no-repeat bg-cover bg-top flex text-white p-6 rounded-2xl relative">
        <div className="features_content">
        <h3 className="text-xl text-[#FFFFFF] font-700 py-8">Daily Check-ins</h3>
        <p className="text-daily text-[#FFFFFF]">
          Start each day with personalized prompts and reflections. Build consistency and self-awareness through guided morning and evening routines.
        </p>
        </div>
        <div className="features_img">
        <img src={browser} alt="Features Image" />
        </div>
      </div>
        {/* Habit Tracking */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-[32px] font-bold text-[#171717] mb-3">Habit Tracking</h3>
          <p className="text-[14px] text-[#4B5563]-400">
            DailyAdvisor AI helps you build and maintain powerful habits that align with your personal and professional goals.
          </p>
        </div>
        <img src={habit} alt="Habit Image" />
      </div>
    </div>
    {/* Progress Analytics */}
    <div className="daily-check">
      <div className="progress-a bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
        <div>
          <h3 className="text-[32px] font-bold text-[#171717] mb-3">Progress Analytics</h3>
          <p className="text-[14px] text-[#4B5563]-400">DailyAdvisorAI goes beyond generic advice — it understands your goals, analyzes your behavior, and gives you tailored recommendations that grow with you.
          </p>
        </div>
        <img src={percent} alt="Progress Image" />
        </div>
      {/* AI Guidance */}
      <div className="daily-check2 flex flex-col">
<div className="ai-guidence bg-white rounded-2xl shadow-md flex flex-row">
  <div className="ai-guidence-content w-[50%] pr-[10%]">
    <h3 className="text-[32px] font-bold text-[#171717] mb-3">AI Guidance</h3>
    <p className="text-[14px] text-[#4B5563] max-w-lg mb-10">
      DailyAdvisorAI goes beyond generic advice — it understands your goals,
      analyzes your behavior, and gives you tailored recommendations that grow
      with you.
    </p>
  </div>
  <div className="Product w-[50%]">
     <div className="bg-white rounded-xl p-4 shadow-lg">
      <img src={icon1} alt="Product" />
      <p className="tip font-semibold text-[#171717] text-[14px] mb-1">Productivity Tip</p>
      <p className="focus text-[#4B5563] text-[13px] leading-snug">
        Focus on deep work between 9–11 AM for best results
      </p>
  </div>
  </div>
  </div>
  <div className="Growth flex flex-row">
    <div className="w-[26%]"></div>
    <div className="Growthone w-[37%]">
       <div className="growth-bottom bg-white rounded-xl p-4 shadow-lg">
        <img src={icon2} alt="Product1" />
       <p className="gro font-semibold text-[#171717] text-[14px] mb-1">Growth</p><br></br>
      <p className="grow text-[#4B5563] text-[13px] leading-snug">
        You're 23% more consistent this month!
      </p>
  </div>
    </div>
    <div className="Smart w-[37%]">
       <div className="bg-white rounded-xl p-4 shadow-lg">
        <img src={icon} alt="Product" />
      <p className="sma font-semibold text-[#171717] text-[14px] mb-1"> Smart Reminder</p><br></br>
      <p className="smar text-[#4B5563] text-[13px] leading-snug">
        Time for your afternoon reflection. Ready?</p>
  </div>
    </div>
  </div>
  
  </div>
  </div>
  </div>
  
</section>
<section className="How-it-works py-20 bg-[#fff]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-left mb-16">
      <h2 className="text-[32px] font-[700] leading-[36px] text-[#0A0A0A]-900 uppercase mb-[10px]">HOW IT WORKS</h2>
      <p className="text-[#4B5563]-500 text-[14px] leading-[18px] font-[400] text-sm max-w-md">
        Get started in minutes and experience the difference of AI built
        specifically for your growth journey.
      </p>
    </div>

    <div className="relative flex justify-between items-start border-t border-dotted border-blue-200 mt-[40px]">
      <div className="relative w-1/4 text-center md:text-left">
        <div
          className="absolute -top-9 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          1
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Onboard</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Begin with a quick, guided setup where you share your goals,
          challenges, and priorities. DailyAdvisorAI learns what matters most to
          you, creating a strong foundation for tailored guidance.
        </p>
      </div>

      <div className="relative w-1/4 text-center md:text-left">
        <div
          className="absolute -top-9 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          2
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Get Personalized Plan</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Based on your inputs, your AI advisor builds a custom growth plan —
          blending productivity, mindset, and strategy.
        </p>
      </div>

      <div className="relative w-1/4 text-center md:text-left">
        <div
          className="absolute -top-9 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          3
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Receive Daily Guidance
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Each day, get personalized prompts, smart reminders, and insights that
          keep you progressing toward your goals.
        </p>
      </div>

      <div className="relative w-1/4 text-center md:text-left">
        <div
          className="absolute -top-9 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold"
        >
          4
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Track Progress & Improve
        </h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Review achievements, insights, and next steps. Keep refining your
          habits and strategy for long-term success.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="GET-In-Touch py-16 bg-[#fff]">
  <div className="top-heading max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-[50px]">
      <h2 className="get-heading text-[32px] leading-[36px] text-left font-bold text-[#121212]-700 mb-[15px]">
        GET IN TOUCH WITH US
      </h2>
      <p className="text-[#848282]-400 text-[16px] leading-[20px] text-left mt-2">
        We're here to assist you.
      </p>
    </div>

    <div className="emailsection grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div className="w-50 left-right col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition">
          <div className="email flex justify-center items-center mb-4">
           <img src={email} alt="Email" />
          </div>
          <h3 className="text-[20px] leading-[24px] font-[500] text-[#0A0A0A]-500 mb-1">Email Us</h3>
          <p className="text-gray-500 text-sm">hello@dailyadvisorai.com</p>
        </div>

        <div className="mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition">
          <div className="email flex justify-center items-center mb-4">
           <img src={message} alt="Message" />
          </div>
          <h3 className="text-[20px] leading-[24px] font-[500] text-[#0A0A0A]-500 mb-1">Live Chat</h3>
          <p className="text-gray-500 text-sm">
            Available Mon–Fri, 9am–6pm EST
          </p>
        </div>
      </div>

      <div className="contact-form w-50 bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm">
        <p className="form-text text-[#4B5563]-400 text-[14px] leading-[18px] mb-[20px] text-sm">
          Have questions about Daily Advisor AI? Want to explore enterprise solutions?
          We’re here to help.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-[#1E3A8A] hover:bg-[#0F1E55] text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</section>










      <footer className="footer bg-[#1E3A8A] text-[#fff] p-[24px]">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#1E3A8A] pb-8">
    
    <div>
      <h2 className="text-lg font-bold tracking-wide">DAILY ADVISOR AI</h2>
      <p className="footer-text text-[14px] text-[#fff] font-[300] leading-[18px] mt-2 max-w-xs leading-relaxed">
        DailyAdvisorAI — Your AI-powered daily companion for life and business growth.
      </p>
    </div>

    <div className="flex justify-center md:justify-center">
      <ul className="menu-item flex flex-wrap gap-[56px] text-sm text-[#fff]-200">
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">Home</a></li>
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">About</a></li>
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">Features</a></li>
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">Pricing</a></li>
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">How It Works</a></li>
        <li><a href="#" className="text-[#fff] text-[14px] leading-[18px] font-[400] hover:text-[#fff] no-underline">Contact</a></li>
      </ul>
      <div className="social-img">
          <img src={Sociallinks} alt="Social" />
    </div>
    </div>

  <div className="bottom-footer flex text-[#fff] font-[400] text-[10px] text-center justify-center leading-[14px] pt-[40px]">
    <p>©2022. All right reserved.</p>
      <a href="#" className="text-[#fff] hover:text-[#fff] no-underline">Privacy Policy</a>
      <a href="#" className="text-[#fff] hover:text-[#fff] no-underline">Terms of Service</a>
    </div>
    </div>
</footer>

    </>
  );
};

export default Home;
