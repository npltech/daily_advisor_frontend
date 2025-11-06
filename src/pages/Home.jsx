import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import component2 from "../assets/component2.png";
import component3 from "../assets/component3.png";
import dashboard from "../assets/dashboard.png";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Banner section */}
      <section className="banner">
        <div className="banner-content">
          <h2>Your Daily AI Advisor for Life & Business</h2>
          <p>Beyond generic AI. Get structured onboarding, personalized coaching, and goal-driven insights tailored to your unique journey.</p>
          <button className="first">Get Started</button>
          <button className="second">REQUEST DEMO</button>
        </div>
         <div className="banner-image">
          <img src={dashboard} alt="Banner Image" />
        </div>
      </section>
  

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-us-content space-y-8">
  <h3 className="text-2xl font-semibold">ABOUT US</h3>
  <p className="text-gray-700">
    Daily Advisor AI is built to understand your goals, track your progress, and offer daily insights that keep you moving forward.
  </p>

 <ul className="about-list space-y-5 mt-8">
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
           <img src={component2} alt="About us" />
        </div>
      </section>

      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
      <Footer />
    </>
  );
};

export default Home;
