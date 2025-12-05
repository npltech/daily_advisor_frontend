import React, { useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import component2 from "../assets/images/Component2.png";
import component3 from "../assets/images/component3.png";
import component4 from "../assets/images/Mask.png";
import dashboard from "../assets/images/Dashboard.png";
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import browser from "../assets/images/browser.png";
import { Container } from "postcss";
import habit from "../assets/images/habit.png";
import percent from "../assets/images/percent.png";
import icon1 from "../assets/images/icon1.png";
import "../styles/style.css";
import icon2 from "../assets/images/icon2.png";
import icon from "../assets/images/Icon.png";
import email from "../assets/images/email.png";
import message from "../assets/images/message.png";
import abouticon from "../assets/images/abouticon.png";
import bannertop from "../assets/images/bannertop.png";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const worksRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const navigateLogin = () => {
    navigate("/login");
  };

  const scrollToAbout = ()=>{
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToFeatures = ()=>{
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToWorks = ()=>{
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToPricing = ()=>{
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
  const scrollToContact = ()=>{
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }
  
  

  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} scrollToFeatures={scrollToFeatures} scrollToWorks={scrollToWorks} scrollToPricing={scrollToPricing} scrollToContact={scrollToContact} />

      <section className="bg-[#FFFFFF] p-4">
        <div
          className="banner z-1 h-[800px] bg-contain bg-no-repeat bg-top-center bg_face_img"          
        >
          <div className="banner-top-content w-full lg:pt-[140px] pt-[140px]">
            <div className="subheading-top bg-[#1E3A8A66] rounded-sm">
              <img src={bannertop} alt="Banner Top" />
              <h3 className="">Personalized AI Coach</h3>
            </div>
          </div>
          <div className="banner-content">
            <h2 className="">Your Daily AI Advisor for Life & Business</h2>
            <p className="text-[#D1D5DC]">
              Beyond generic AI. Get structured onboarding, personalized
              coaching, and goal-driven insights tailored to your unique
              journey.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-[#FFFFFF] text-[#1E3A8A] text-sm font-medium rounded-md"
                onClick={navigateLogin}
              >
                GET STARTED
              </button>
              <button className="px-4 py-2 bg-[#1E3A8A] text-[#FFFFFF] text-sm font-medium rounded-md">
                REQUEST DEMO
              </button>
            </div>
          </div>
          <div className="banner-image">
            <img src={dashboard} alt="Banner Image" />
          </div>
        </div>
      </section>

      <section className="about-us px-[20px] sm:px-[60px] pt-[220px] lg:pt-[520px]" ref={aboutRef}>
        <div className="container">
          <div className="flex w-full flex-wrap lg:flex-nowrap ">
            <div className="about-us-content flex flex-col w-full lg:w-1/2 mb-[20px] md:mb-0">
              <h3 className="text-2xl font-semibold mb-[10px]">ABOUT US</h3>
              <p className="text-gray-700">
                Daily Advisor AI is built to understand your goals, track your
                progress, and offer daily insights that keep you moving forward.
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
                    <span className="text-[#334155] text-[15px] leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image-one flex gap-[20px] md:pl-[40px] pl-[0px] w-full lg:w-1/2 mt-[16px]">
              <div className="graph w-[50%] md:w-auto">
                <img src={component3} alt="About us" />
              </div>
              <div className="about-box w-[45%] md:w-auto">
                <div className="abouticon">
                  <img src={abouticon} alt="About-icon" />
                  <h3 className="">Smart Insights</h3>
                  <p className="">
                    AI analyzes your patterns and provides actionable
                    recommendations to optimize your day.
                  </p>
                </div>
                <div className="about-second ">
                  <img src={component2} alt="About us" />
                </div>
              </div>
              <img
                src={component4}
                alt="About us"
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] p-4" ref={featuresRef}>
        <div className="Features bg-[url('/src/assets/images/features1.png')] bg-no-repeat bg-cover bg-top mt-[100px] pb-[16px] px-6">
          <div className="container">
            <div className="features-bg-img ">
              <div className="text-center mb-12 pt-[16px]">
                <h2 className="text-[32px] font-bold text-[#0A0A0A]">
                  FEATURES
                </h2>
                <p className="text-sm font-normal text-[#4B5563]">
                  A complete ecosystem for personal and professional growth,
                  designed to fit seamlessly into your daily routine.
                </p>
              </div>

              <div className="daily-check flex flex-wrap md:flex-nowrap w-full gap-[20px] mb-[20px]">
                <div className="w-full bg-[url('/src/assets/images/daily.png')] bg-no-repeat bg-cover bg-top flex text-white py-6 pl-6 rounded-2xl relative">
                  <div className="w-[50%] flex flex-col justify-center px-4 py-4">
                    <h3 className="text-[32px] text-[#FFFFFF] font-bold">
                      Daily Check-ins
                    </h3>
                    <p className="text-[#D1D5DC] text-sm font-normal pr-[40px]">
                      Start each day with personalized prompts and reflections.
                      Build consistency and self-awareness through guided
                      morning and evening routines.
                    </p>
                  </div>
                  <div className="w-[50%] py-4 pr-[1.5px]">
                    <img src={browser} alt="Features Image" className="w-full" />
                  </div>
                </div>
                
                <div className="bg-white w-full md:w-1/3 pt-6 px-6 rounded-2xl shadow-md flex flex-col justify-between">
                  <div>
                    <h3 className="text-[32px] font-bold text-[#0A0A0A]">
                      Habit Tracking
                    </h3>
                    <p className="text-[14px] text-[#4B5563] font-normal">
                      DailyAdvisor AI helps you build and maintain powerful
                      habits that align with your personal and professional
                      goals.
                    </p>
                  </div>
                  <img src={habit} alt="Habit Image" />
                </div>
              </div>
              <div className="daily-check flex flex-wrap md:flex-nowrap w-full gap-[20px] mb-[20px]">
                <div className=" progress-a  w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                  <div>
                    <h3 className="text-[24px] md:text-[32px] font-bold text-[#171717] mb-3">
                      Progress Analytics
                    </h3>
                    <p className="text-[14px] text-[#4B5563]-400">
                      DailyAdvisorAI goes beyond generic advice — it understands
                      your goals, analyzes your behavior, and gives you tailored
                      recommendations that grow with you.
                    </p>
                  </div>
                  <img src={percent} alt="Progress Image" />
                </div>
                <div className="daily-check2 w-full md:w-1/3 flex flex-col">
                  <div className="ai-guidence bg-white rounded-2xl shadow-md flex flex-row flex-wrap md:flex-nowrap">
                    <div className="ai-guidence-content w-full md:w-[50%] pr-[0%] md:pr-[10%]">
                      <h3 className="text-[24px] md:text-[32px] font-bold text-[#171717] mb-3">
                        AI Guidance
                      </h3>
                      <p className="text-[14px] text-[#4B5563] max-w-lg mb-10">
                        DailyAdvisorAI goes beyond generic advice — it
                        understands your goals, analyzes your behavior, and
                        gives you tailored recommendations that grow with you.
                      </p>
                    </div>
                    <div className="Product W-100% md:w-[50%]">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img src={icon1} alt="Product" />
                        <p className="tip font-semibold text-[#171717] text-[14px] mb-1">
                          Productivity Tip
                        </p>
                        <p className="focus text-[#4B5563] text-[13px] leading-snug">
                          Focus on deep work between 9–11 AM for best results
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="Growth flex flex-row flex-wrap md:flex-nowrap gap-[20px] px-[20px]">
                    <div className="w-full md:w-[26%]"></div>
                    <div className="Growthone w-[45%] md:w-[37%]">
                      <div className="growth-bottom bg-white rounded-xl p-4 shadow-lg">
                        <img src={icon2} alt="Product1" />
                        <p className="gro font-semibold text-[#171717] text-[14px] mb-1">
                          Growth
                        </p>
                        <br></br>
                        <p className="grow text-[#4B5563] text-[13px] leading-snug">
                          You're 23% more consistent this month!
                        </p>
                      </div>
                    </div>
                    <div className="Smart w-[45%] md:w-[37%]">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img src={icon} alt="Product" />
                        <p className="sma font-semibold text-[#171717] text-[14px] mb-1">
                          {" "}
                          Smart Reminder
                        </p>
                        <br></br>
                        <p className="smar text-[#4B5563] text-[13px] leading-snug">
                          Time for your afternoon reflection. Ready?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="How-it-works py-20 bg-[#fff]" ref={worksRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-[24px] md:text-[32px] font-[700] leading-[36px] text-[#0A0A0A]-900 uppercase mb-[10px]">
              HOW IT WORKS
            </h2>
            <p className="text-[#4B5563]-500 text-[14px] leading-[18px] font-[400] text-sm max-w-md">
              Get started in minutes and experience the difference of AI built
              specifically for your growth journey.
            </p>
          </div>

          <div className="w-full flex lg:flex-row gap-[20px] space-x-[20] px-[10] overflow-x-auto pb-4">
            <div className="absolute top-[5] left-[0] right-[0] border-t border-dashed border-[blue]-200 z-[0]"></div>

            <div className="flex flex-row gap-[20px] items-start text-left min-w-[320px] mt-[12px]">
              <div className="z-[10] flex flex-col items-center mb-[4]">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#1E3A8A] text-[#FFFFFF] font-[semibold] shadow-md">
                  1
                </div>
              </div>
              <div className="scroll-animate">
                <h3 className="text-[lg] font-[semibold] text-[gray]-900">
                  Onboard
                </h3>
                <p className="text-[sm] text-[gray]-600 mt-[2] leading-relaxed">
                  Begin with a quick, guided setup where you share your goals,
                  challenges, and priorities. DailyAdvisor learns what matters
                  most to you, creating a strong foundation for tailored
                  guidance.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px] items-start text-left min-w-[320px] mt-[12px]">
              <div className="z-[10] flex flex-col items-center mb-[4]">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#1E3A8A] text-[#FFFFFF] font-[semibold] shadow-md">
                  2
                </div>
              </div>
              <div className="scroll-animate">
                <h3 className="text-[lg] font-[semibold] text-[gray]-900">
                  Get Personalized Plan
                </h3>
                <p className="text-[sm] text-[gray]-600 mt-[2] leading-relaxed">
                  Based on your inputs, your AI advisor builds a custom growth
                  plan – blending productivity, mindset, and strategy. You’ll
                  receive focused goals, progress checkpoints, and actionable
                  next steps designed just for you.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-[20px] items-start text-left min-w-[320px] mt-[12px]">
              <div className="z-[10] flex flex-col items-center mb-[4]">
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#1E3A8A] text-[#FFFFFF] font-[semibold] shadow-md">
                  3
                </div>
              </div>
              <div className="scroll-animate">
                <h3 className="text-[lg] font-[semibold] text-[gray]-900">
                  Receive Daily Guidance
                </h3>
                <p className="text-[sm] text-[gray]-600 mt-[2] leading-relaxed">
                  Each day, get personalized reminders, motivation, and nudges
                  that keep you on track. Track progress and celebrate small
                  wins that lead to lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F9FF] py-14 px-12px" ref={pricingRef}>
        <div className="text-center mb-10">
          <h2 className="text-[24px] md:text-[32px] font-[700] text-[#000] tracking-wide">
            PRICING
          </h2>
          <p className="text-[14px] text-[#4B5563] mt-2">
            Choose the plan that fits your ambitions. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto flex justify-center flex-wrap gap-[24px]">
          <div className="w-[80%] md:w-[48%] lg:w-[31%] py-0 lg:py-6">
            <div className="w-full bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
              <div className="flex justify-end">
                <button className="mt-[-32px] mr-[-32px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-tr-[15px] rounded-bl-[15px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                  Start Pro Trial
                </button>
              </div>

              <h3 className="text-[24px] font-[700] text-[#FFFFFF]">Pro</h3>
              <p className="text-[14px] text-[#D1D5DC] mt-1">
                For serious personal growth
              </p>

              <div className="mt-[20px]">
                <span className="text-[58px] font-bold text-[#E6C26B]">
                  $29
                </span>
                <span className="text-[14px] text-[#D1D5DC]"> /per month</span>
              </div>

              <button className="w-full mt-[20px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-[8px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                Start Pro Trial
              </button>

              <div className="w-full h-[1px] bg-[#E4E4E4] my-6"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Unlimited AI conversations
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Advanced daily check-ins
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Custom goal frameworks
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Priority AI coaching
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Weekly strategy sessions
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Insights & productivity tools
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Weekly support
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[80%] md:w-[48%] lg:w-[31%] bg-[#0A0A0A] rounded-2xl shadow-lg p-8">
            <div className="flex justify-end">
              <button className="mt-[-32px] mr-[-32px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-tr-[15px] rounded-bl-[15px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                Start Pro Trial
              </button>
            </div>

            <h3 className="text-[24px] font-[700] text-[#FFFFFF]">Pro</h3>
            <p className="text-[14px] text-[#D1D5DC] mt-1">
              For serious personal growth
            </p>

            <div className="mt-[20px]">
              <span className="text-[58px] font-bold text-[#E6C26B]">$29</span>
              <span className="text-[14px] text-[#D1D5DC]"> /per month</span>
            </div>

            <button className="w-full mt-[20px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-[8px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
              Start Pro Trial
            </button>

            <div className="w-full h-[1px] bg-[#E4E4E4] my-6"></div>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Unlimited AI conversations
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Advanced daily check-ins
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Custom goal frameworks
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Priority AI coaching
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Weekly strategy sessions
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Insights & productivity tools
              </li>
              <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                <RiCheckboxCircleLine />
                Weekly support
              </li>
            </ul>
          </div>
          <div className="w-[80%] md:w-[48%] lg:w-[31%] py-0 lg:py-6">
            <div className="w-full bg-[#FFFFFF] rounded-2xl shadow-lg p-8">
              <div className="flex justify-end">
                <button className="mt-[-32px] mr-[-32px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-tr-[15px] rounded-bl-[15px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                  Start Pro Trial
                </button>
              </div>

              <h3 className="text-[24px] font-[700] text-[#FFFFFF]">Pro</h3>
              <p className="text-[14px] text-[#D1D5DC] mt-1">
                For serious personal growth
              </p>

              <div className="mt-[20px]">
                <span className="text-[58px] font-bold text-[#E6C26B]">
                  $29
                </span>
                <span className="text-[14px] text-[#D1D5DC]"> /per month</span>
              </div>

              <button className="w-full mt-[20px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-[8px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                Start Pro Trial
              </button>

              <div className="w-full h-[1px] bg-[#E4E4E4] my-6"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Unlimited AI conversations
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Advanced daily check-ins
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Custom goal frameworks
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Priority AI coaching
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Weekly strategy sessions
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Insights & productivity tools
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Weekly support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="GET-In-Touch py-[30px] lg:py-[80px] px-[20px] bg-[#fff]" ref={contactRef}>
        <div className="container w-full">
          <div className="emailsection flex flex-wrap md:flex-nowrap w-full gap-[20px]">
            <div className="w-full md:w-50 left_part flex flex-col justify-between">
              <div className="top_heading mb-[12px]">
                <h2 className="get-heading text-[24px] md:text-[32px] leading-[36px] font-bold text-[#121212]-700 md:mb-[15px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-[#848282]-400 text-[16px] leading-[20px] md:mt-2">
                  We're here to assist you.
                </p>
              </div>
              <div className="w-full flex flex-col sm:flex-row w-full gap-[20px]">
                <div className="w-[100%] sm:w-[50%] mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition">
                  <div className="email mb-4">
                    <img src={email} alt="Email" />
                  </div>
                  <h3 className="text-[16px] md:text-[20px] leading-[24px] font-[500] text-[#0A0A0A]-500 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-500 text-sm">
                    hello@dailyadvisorai.com
                  </p>
                </div>

                <div className="w-[100%] sm:w-[50%] mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition">
                  <div className="email mb-4">
                    <img src={message} alt="Message" />
                  </div>
                  <h3 className="text-[16px] md:text-[20px] leading-[24px] font-[500] text-[#0A0A0A]-500 mb-1">
                    Live Chat
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Available Mon–Fri, 9am–6pm EST
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-form w-full md:w-50 bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm">
              <p className="form-text text-[#4B5563]-400 text-[14px] leading-[18px] mb-[20px] text-sm">
                Have questions about Daily Advisor AI? Want to explore
                enterprise solutions? We’re here to help.
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

      <footer className="w-full bg-[#1E3A8A] text-white py-[24px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="w-full md:w-[28%] mb-6 md:mb-0">
            <h2 className="text-[24px] font-[700]">DAILY ADVISOR AI</h2>
            <p className="text-[14px] mt-2 leading-[18px] w-[275px]">
              DailyAdvisorAI — Your AI-powered daily companion for life and
              business growth.
            </p>
          </div>

          <div className="flex flex-wrap justify justify-center gap-8 text-[14px] font-[400]">
            {/* <a href="#" className="">
              Home
            </a> */}
            <p className="cursor-pointer"
              onClick={scrollToAbout}
            >
              About
            </p>
            <p className="cursor-pointer"
              onClick={scrollToFeatures}
            >
              Features
            </p>
            <p className="cursor-pointer"
              onClick={scrollToWorks}
            >
              How it Works
            </p>
            <p className="cursor-pointer"
              onClick={scrollToPricing}
            >
              Pricing
            </p>
            <p className="cursor-pointer"
              onClick={scrollToContact}
            >
              Contact
            </p>
          </div>

          <div className="flex justify-end gap-4 mt-6 md:mt-0 md:w-[28%]">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div className="w-full border-b-[1px] border-[#282828]/20 mt-6"></div>

        <div className="max-w-6xl mx-auto text-center text-[10px] mt-4 flex justify-center gap-6">
          <span>© 2025. All rights reserved.</span>
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Service</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
