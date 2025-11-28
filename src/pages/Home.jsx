import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import component2 from "../assets/images/component2.png";
import component3 from "../assets/images/component3.png";
import component4 from "../assets/images/Mask.png";
import dashboard from "../assets/images/dashboard.png";
import { FaCheck } from "react-icons/fa";
import browser from "../assets/images/browser.png";
import { Container } from "postcss";
import habit from "../assets/images/habit.png";
import percent from "../assets/images/percent.png";
import icon1 from "../assets/images/icon1.png";
import "../styles/style.css";
import icon2 from "../assets/images/icon2.png";
import icon from "../assets/images/icon.png";
import email from "../assets/images/email.png";
import message from "../assets/images/message.png";
import bgImage from "../assets/images/banner.png";
import abouticon from "../assets/images/abouticon.png";
import bannertop from "../assets/images/bannertop.png";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Banner section */}
      <section
        className="banner z-1 bg-[length:100%_auto] bg-no-repeat bg-top-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="banner-top-content w-full lg:pt-[200px]">
          <div className="subheading-top">
            <img src={bannertop} alt="Banner Top" />
            <h3 className="">Personalized AI Coach</h3>
          </div>
        </div>
        <div className="banner-content">
          <h2 className="">Your Daily AI Advisor for Life & Business</h2>
          <p>
            Beyond generic AI. Get structured onboarding, personalized coaching,
            and goal-driven insights tailored to your unique journey.
          </p>
          <button className="first">Get Started</button>
          <button className="second">REQUEST DEMO</button>
        </div>
        <div className="banner-image">
          <img src={dashboard} alt="Banner Image" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us px-[20px] md:px-[0]">
        <div class="container">
          <div class="flex w-full flex-wrap md:flex-nowrap ">
            <div className="about-us-content flex flex-col w-full md:w-1/2 mb-[20px] md:mb-0">
              <h3 className="text-2xl font-semibold">ABOUT US</h3>
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
            <div className="about-image-one flex gap-[20px] md:pl-[40px] pl-[0px] w-full md:w-1/2">
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
              <img src={component4} alt="About us" class="hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="Features py-[20px] bg-[url('/src/assets/images/features.png')] bg-no-repeat bg-cover bg-top py-[16px] px-6">
        <div class="container">
          <div className="features-bg-img ">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-[32px] font-bold text-gray-700">FEATURES</h2>
              <p className="text-[14px] text-[#4B5563] mt-2">
                A complete ecosystem for personal and professional growth,
                designed to fit seamlessly into your daily routine.
              </p>
            </div>

            {/* Features Grid */}
            <div className="daily-check flex flex-wrap md:flex-nowrap w-full gap-[20px] mb-[20px]">
              {/* Daily Check-ins */}
              <div className="w-full md:w-2/3 bg-[url('/src/assets/images/daily.png')] bg-no-repeat bg-cover bg-top flex text-white p-6 rounded-2xl relative">
                <div className="features_content pt-0 pb-[10px] md:pt-[40px] md:pb-[40px]">
                  <h3 className="text-xl text-[#FFFFFF] font-700 py-8">
                    Daily Check-ins
                  </h3>
                  <p className="text-daily text-[#FFFFFF]">
                    Start each day with personalized prompts and reflections.
                    Build consistency and self-awareness through guided morning
                    and evening routines.
                  </p>
                </div>
                <div className="features_img">
                  <img src={browser} alt="Features Image" />
                </div>
              </div>
              {/* Habit Tracking */}
              <div className="bg-white w-full md:w-1/3 p-6 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-bold text-[#171717] mb-3">
                    Habit Tracking
                  </h3>
                  <p className="text-[14px] text-[#4B5563]-400">
                    DailyAdvisor AI helps you build and maintain powerful habits
                    that align with your personal and professional goals.
                  </p>
                </div>
                <img src={habit} alt="Habit Image" />
              </div>
            </div>
            {/* Progress Analytics */}
            <div className="daily-check flex flex-wrap md:flex-nowrap w-full gap-[20px] mb-[20px]">
              <div className=" progress-a  w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] font-bold text-[#171717] mb-3">
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
              {/* AI Guidance */}
              <div className="daily-check2 w-full md:w-1/3 flex flex-col">
                <div className="ai-guidence bg-white rounded-2xl shadow-md flex flex-row flex-wrap md:flex-nowrap">
                  <div className="ai-guidence-content w-full md:w-[50%] pr-[0%] md:pr-[10%]">
                    <h3 className="text-[32px] font-bold text-[#171717] mb-3">
                      AI Guidance
                    </h3>
                    <p className="text-[14px] text-[#4B5563] max-w-lg mb-10">
                      DailyAdvisorAI goes beyond generic advice — it understands
                      your goals, analyzes your behavior, and gives you tailored
                      recommendations that grow with you.
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
      </section>
      <section className="How-it-works py-20 bg-[#fff]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-[32px] font-[700] leading-[36px] text-[#0A0A0A]-900 uppercase mb-[10px]">
              HOW IT WORKS
            </h2>
            <p className="text-[#4B5563]-500 text-[14px] leading-[18px] font-[400] text-sm max-w-md">
              Get started in minutes and experience the difference of AI built
              specifically for your growth journey.
            </p>
          </div>

          <div className="flex min-w-max space-x-[20] px-[10] relative">
            <div className="absolute top-[5] left-[0] right-[0] border-t border-dashed border-[blue]-200 z-[0]"></div>

            <div className="relative flex flex-col items-start text-left min-w-[320px]">
              <div className="z-[10] flex flex-col items-center mb-[4]">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[blue]-100 border border-[blue]-400 text-[blue]-700 font-[semibold] shadow-md">
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

            <div className="relative flex flex-col items-start text-left min-w-[320px]">
              <div className="z-10 flex flex-col items-center mb-[4]">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[blue]-100 border border-[blue]-400 text-[blue]-700 font-[semibold] shadow-md">
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

            <div className="relative flex flex-col items-start text-left min-w-[320px]">
              <div className="z-10 flex flex-col items-center mb-[4]">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[blue]-100 border border-[blue]-400 text-[blue]-700 font-[semibold] shadow-md">
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

      <section className="GET-In-Touch  py-[40px] md:py-16 px-[20px] bg-[#fff]">
        <div class="container w-full">
          <div className="emailsection flex  flex-wrap md:flex-nowrap w-full gap-[20px]">
            <div className="w-full md:w-50  left_part flex flex-col justify-between">
              <div className="top_heading">
                <h2 className="get-heading text-[28px] md:text-[32px] leading-[36px] font-bold text-[#121212]-700 md:mb-[15px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-[#848282]-400 text-[16px] leading-[20px] md:mt-2">
                  We're here to assist you.
                </p>
              </div>
              <div class="flex flex-row w-full gap-[20px]">
                <div className="mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition w-1/2">
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

                <div className="mail bg-[#F8F9FF] rounded-[24px] py-[40px] px-[24px] shadow-sm text-center hover:shadow-md transition w-1/2">
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

      {/* <footer className="footer bg-[#1E3A8A] text-[#fff] p-[24px]">
        <Footer />
      </footer> */}
    </>
  );
};

export default Home;
