import React, { useRef, useState } from "react";
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
import form1 from "../assets/images/form1.png";
import form2 from "../assets/images/form2.png";
import form3 from "../assets/images/form3.png";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/slices/loaderSlice.js";
import { loginUser } from "../store/slices/authSlice.js";
import { loginApi, registerUser } from "../apis/userApi.js";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const worksRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [name2, setName2] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const navigateLogin = () => {
    navigate("/login");
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const openDemoForm = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {};

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoader());

    const postdata = {
      username: email1,
      password: password1,
    };

    await loginApi(postdata)
      .then((res) => {
        if (res?.accessToken) {
          dispatch(loginUser(res.accessToken));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoader());
        setError(err?.response?.data?.message ||
            err?.message ||
            "Something went wrong!!",)
        // Swal.fire({
        //   icon: "error",
        //   title: "Login failed",
        //   text:
        //     err?.response?.data?.message ||
        //     err?.message ||
        //     "Something went wrong!!",
        //   confirmButtonColor: "#3085d6",
        // });
      });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    dispatch(showLoader());
    
    const postdata = {
      first_name: name2,
      user_email: email2,
      user_password: password2,
    };

    await registerUser(postdata)
      .then((res) => {
        toggleLoginForm(true);
        setName2('');
        setEmail2('');
        setPassword2('');
      })
      .catch((err) => {
        // Swal.fire({
        //   icon: "error",
        //   title:
        //     err?.response?.data?.message ||
        //     err?.message ||
        //     "Something went wrong!!",
        //   confirmButtonColor: "#3085d6",
        // });
        setError(err?.response?.data?.message ||
            err?.message ||
            "Something went wrong!!");
      })
      .finally(()=>{
        dispatch(hideLoader());
      });
  };

  const toggleLoginForm = (val) => {
    setError('');
    setEmail1('');
    setPassword1('');
    setShowSignupForm(false);
    setShowLoginForm(val);
  };

  const toggleSignupForm = (val) => {
    setError('');
    setName2('');
    setEmail2('');
    setPassword2('');
    setShowLoginForm(false);
    setShowSignupForm(val);
  };

  return (
    <>
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToFeatures={scrollToFeatures}
        scrollToWorks={scrollToWorks}
        scrollToPricing={scrollToPricing}
        scrollToContact={scrollToContact}
        toggleLoginForm={toggleLoginForm}
      />

      <section className="bg-[#FFFFFF] p-4">
        <div className="banner z-1 h-[800px] bg-contain bg-no-repeat bg-top-center bg_face_img">
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
                onClick={() => toggleLoginForm(true)}
              >
                GET STARTED
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-[#1E3A8A] text-[#FFFFFF] text-sm font-medium rounded-md"
                onClick={openDemoForm}
              >
                REQUEST DEMO
              </button>
            </div>
          </div>
          <div className="banner-image">
            <img src={dashboard} alt="Banner Image" />
          </div>
        </div>
      </section>

      <section
        className="about-us px-[20px] sm:px-[60px] pt-[220px] lg:pt-[520px]"
        ref={aboutRef}
      >
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
                    <img
                      src={browser}
                      alt="Features Image"
                      className="w-full"
                    />
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
                {/* <button className="mt-[-32px] mr-[-32px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-tr-[15px] rounded-bl-[15px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                  Start Pro Trial
                </button> */}
              </div>

              <h3 className="text-[24px] font-[700] text-[#0A0A0A]">Free</h3>
              <p className="text-[14px] text-[#D1D5DC] mt-1">
                Perfect for trying out Daily Advisor AI
              </p>

              <div className="mt-[20px]">
                <span className="text-[58px] font-bold text-[#E6C26B]">$0</span>
                <span className="text-[14px] text-[#D1D5DC]"> /forever</span>
              </div>

              <button className="w-full mt-[20px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-[8px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                Start Free
              </button>

              <div className="w-full h-[1px] bg-[#E4E4E4] my-6"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  7-day trial of all features
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Basic daily check-ins
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Limited AI conversations
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Progress tracking
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Email support
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
                {/* <button className="mt-[-32px] mr-[-32px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-tr-[15px] rounded-bl-[15px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                  Start Pro Trial
                </button> */}
              </div>

              <h3 className="text-[24px] font-[700] text-[#0A0A0A]">
                Business
              </h3>
              <p className="text-[14px] text-[#D1D5DC] mt-1">
                For teams and organizations
              </p>

              <div className="mt-[20px]">
                <span className="text-[58px] font-bold text-[#0A0A0A]">
                  $99
                </span>
                <span className="text-[14px] text-[#D1D5DC]"> /per month</span>
              </div>

              <button className="w-full mt-[20px] bg-[#1E3A8A] text-white py-[8px] px-[16px] rounded-[8px] font-[400] hover:bg-[#1E3A8A] transition text-[14px]">
                Contact Sales
              </button>

              <div className="w-full h-[1px] bg-[#E4E4E4] my-6"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Everything in Professional
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Dedicated AI advisor model
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Business & team insights
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Unlimited strategy sessions
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  Custom integrations
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  API access
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  White-glove support
                </li>
                <li className="flex items-center gap-2 text-[12px] font-[400] text-[#D1D5DC]">
                  <RiCheckboxCircleLine />
                  1-on-1 onboarding call
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="GET-In-Touch py-[30px] lg:py-[80px] px-[20px] bg-[#fff]"
        ref={contactRef}
      >
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
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#2B7FFF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M34 19L25.009 24.727C24.7039 24.9042 24.3573 24.9976 24.0045 24.9976C23.6517 24.9976 23.3051 24.9042 23 24.727L14 19"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32 16H16C14.8954 16 14 16.8954 14 18V30C14 31.1046 14.8954 32 16 32H32C33.1046 32 34 31.1046 34 30V18C34 16.8954 33.1046 16 32 16Z"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                        fill="#AD46FF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M33 27C33 27.5304 32.7893 28.0391 32.4142 28.4142C32.0391 28.7893 31.5304 29 31 29H19L15 33V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H31C31.5304 15 32.0391 15.2107 32.4142 15.5858C32.7893 15.9609 33 16.4696 33 17V27Z"
                        stroke="#1E3A8A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
            <p className="cursor-pointer" onClick={scrollToAbout}>
              About
            </p>
            <p className="cursor-pointer" onClick={scrollToFeatures}>
              Features
            </p>
            <p className="cursor-pointer" onClick={scrollToWorks}>
              How it Works
            </p>
            <p className="cursor-pointer" onClick={scrollToPricing}>
              Pricing
            </p>
            <p className="cursor-pointer" onClick={scrollToContact}>
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

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-full max-w-xl bg-[#FFFFFF] p-[20px] rounded-lg text-center max-h-[90vh] overflow-y-auto hide_scrollbar">
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => setShowForm(false)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 233 233"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M229.816 2.29901C226.75 -0.766337 221.301 -0.766337 218.236 2.29901L116.057 104.477L13.8792 2.29901C10.8139 -0.766337 5.36436 -0.766337 2.29901 2.29901C-0.766337 5.36436 -0.766337 10.8139 2.29901 13.8792L104.477 116.057L2.29901 218.236C-0.766337 221.301 -0.766337 226.75 2.29901 229.816C4.00198 231.519 6.04554 232.2 8.0891 232.2C10.1327 232.2 12.1762 231.519 13.8792 229.816L116.057 127.638L218.236 229.816C219.939 231.519 221.982 232.2 224.026 232.2C226.069 232.2 228.113 231.519 229.816 229.816C232.881 226.75 232.881 221.301 229.816 218.236L127.638 116.057L229.816 13.8792C232.881 10.8139 232.881 5.70495 229.816 2.29901Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="text-[#0A0A0A] text-base font-bold">Request a Demo</p>
            <p className="text-[#848282] text-xs font-normal">
              See how our AI can transform your workflow in minutes
            </p>
            <form onSubmit={handleSubmit} className="formsubmit mt-4">
              <div className="mb-[16px]">
                <label className="flex items-center gap-[4px] text-xs font-normal text-[#848282] mb-[2px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 11.5V10.5C10.5 9.96957 10.2893 9.46086 9.91421 9.08579C9.53914 8.71071 9.03043 8.5 8.5 8.5H5.5C4.96957 8.5 4.46086 8.71071 4.08579 9.08579C3.71071 9.46086 3.5 9.96957 3.5 10.5V11.5"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 6.5C8.10457 6.5 9 5.60457 9 4.5C9 3.39543 8.10457 2.5 7 2.5C5.89543 2.5 5 3.39543 5 4.5C5 5.60457 5.89543 6.5 7 6.5Z"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  First Name
                </label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First Name"
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                />
              </div>
              <div className="mb-[16px]">
                <label className="flex items-center gap-[4px] text-xs font-normal text-[#848282] mb-[2px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 11.5V10.5C10.5 9.96957 10.2893 9.46086 9.91421 9.08579C9.53914 8.71071 9.03043 8.5 8.5 8.5H5.5C4.96957 8.5 4.46086 8.71071 4.08579 9.08579C3.71071 9.46086 3.5 9.96957 3.5 10.5V11.5"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 6.5C8.10457 6.5 9 5.60457 9 4.5C9 3.39543 8.10457 2.5 7 2.5C5.89543 2.5 5 3.39543 5 4.5C5 5.60457 5.89543 6.5 7 6.5Z"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Last Name
                </label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                />
              </div>

              <div className="mb-[16px]">
                <label className="flex items-center gap-[4px] text-xs font-normal text-[#848282] mb-[2px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6857 11.6639H2.31445C1.82149 11.6633 1.34889 11.4673 1.00032 11.1187C0.651741 10.7701 0.455657 10.2975 0.455078 9.80455V4.1958C0.455657 3.70284 0.651741 3.23024 1.00032 2.88166C1.34889 2.53309 1.82149 2.337 2.31445 2.33643H11.6857C12.1787 2.337 12.6513 2.53309 12.9998 2.88166C13.3484 3.23024 13.5445 3.70284 13.5451 4.1958V9.80455C13.5445 10.2975 13.3484 10.7701 12.9998 11.1187C12.6513 11.4673 12.1787 11.6633 11.6857 11.6639ZM2.31445 2.99268C1.99536 2.99268 1.68935 3.11943 1.46372 3.34506C1.23809 3.57069 1.11133 3.87671 1.11133 4.1958V9.80455C1.11133 10.1236 1.23809 10.4297 1.46372 10.6553C1.68935 10.8809 1.99536 11.0077 2.31445 11.0077H11.6857C12.0048 11.0077 12.3108 10.8809 12.5364 10.6553C12.7621 10.4297 12.8888 10.1236 12.8888 9.80455V4.1958C12.8888 3.87671 12.7621 3.57069 12.5364 3.34506C12.3108 3.11943 12.0048 2.99268 11.6857 2.99268H2.31445Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M7 8.32999C6.59522 8.33062 6.20126 8.1993 5.87781 7.95592L0.769999 4.0928C0.73391 4.06747 0.703296 4.03513 0.679984 3.9977C0.656673 3.96028 0.641143 3.91854 0.634322 3.87498C0.627501 3.83142 0.629528 3.78694 0.640283 3.74418C0.651038 3.70142 0.6703 3.66127 0.696918 3.62612C0.723537 3.59097 0.756966 3.56155 0.795209 3.53961C0.833452 3.51767 0.875725 3.50366 0.919503 3.49842C0.96328 3.49318 1.00767 3.49682 1.05001 3.50911C1.09235 3.52141 1.13178 3.54211 1.16594 3.56999L6.27375 7.43748C6.4835 7.59406 6.73825 7.67866 7 7.67866C7.26175 7.67866 7.51649 7.59406 7.72625 7.43748L12.8341 3.56999C12.8682 3.54211 12.9077 3.52141 12.95 3.50911C12.9923 3.49682 13.0367 3.49318 13.0805 3.49842C13.1243 3.50366 13.1665 3.51767 13.2048 3.53961C13.243 3.56155 13.2765 3.59097 13.3031 3.62612C13.3297 3.66127 13.349 3.70142 13.3597 3.74418C13.3705 3.78694 13.3725 3.83142 13.3657 3.87498C13.3589 3.91854 13.3433 3.96028 13.32 3.9977C13.2967 4.03513 13.2661 4.06747 13.23 4.0928L8.12219 7.95592C7.79874 8.1993 7.40478 8.33062 7 8.32999Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M0.912103 10.7492C0.845554 10.7493 0.780547 10.7291 0.72571 10.6914C0.670873 10.6537 0.628797 10.6002 0.605067 10.5381C0.581336 10.4759 0.577071 10.408 0.59284 10.3433C0.608608 10.2787 0.643663 10.2203 0.693353 10.1761L4.71835 6.58638C4.78333 6.52836 4.86869 6.49853 4.95566 6.50346C5.04263 6.50838 5.12409 6.54765 5.1821 6.61263C5.24012 6.6776 5.26995 6.76297 5.26502 6.84994C5.2601 6.93691 5.22083 7.01836 5.15585 7.07638L1.13085 10.6661C1.07108 10.7204 0.992911 10.7502 0.912103 10.7492ZM13.0877 10.7492C13.0069 10.7502 12.9288 10.7204 12.869 10.6661L8.84398 7.07638C8.779 7.01836 8.73973 6.93691 8.73481 6.84994C8.72989 6.76297 8.75971 6.6776 8.81773 6.61263C8.87574 6.54765 8.9572 6.50838 9.04417 6.50346C9.13114 6.49853 9.2165 6.52836 9.28148 6.58638L13.3043 10.1761C13.354 10.2203 13.389 10.2787 13.4048 10.3433C13.4206 10.408 13.4163 10.4759 13.3926 10.5381C13.3688 10.6002 13.3268 10.6537 13.2719 10.6914C13.2171 10.7291 13.1521 10.7493 13.0855 10.7492H13.0877Z"
                      fill="#4B5563"
                    />
                  </svg>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-[4px] text-xs font-normal text-[#848282] mb-[2px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.25 4.6875L7.19256 7.90894C7.02094 8.00862 6.826 8.06112 6.62753 8.06112C6.42906 8.06112 6.23412 8.00862 6.0625 7.90894L1 4.6875"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.125 3H2.125C1.50368 3 1 3.50368 1 4.125V10.875C1 11.4963 1.50368 12 2.125 12H11.125C11.7463 12 12.25 11.4963 12.25 10.875V4.125C12.25 3.50368 11.7463 3 11.125 3Z"
                      stroke="#848282"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your Message here..."
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="login-sty w-full bg-[#1E3A8A] text-[12px] leading-[16px] font-[400] text-[#ffffff] py-[12px] mt-[10px] rounded-[8px] hover:bg-[#1E3A8A] transition"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      )}

      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20 mx-[20px]">
          <div className="w-full max-w-xl bg-[#FFFFFF] p-[20px] rounded-lg text-center max-h-[90vh] overflow-y-auto hide_scrollbar">
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => toggleLoginForm(false)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 233 233"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M229.816 2.29901C226.75 -0.766337 221.301 -0.766337 218.236 2.29901L116.057 104.477L13.8792 2.29901C10.8139 -0.766337 5.36436 -0.766337 2.29901 2.29901C-0.766337 5.36436 -0.766337 10.8139 2.29901 13.8792L104.477 116.057L2.29901 218.236C-0.766337 221.301 -0.766337 226.75 2.29901 229.816C4.00198 231.519 6.04554 232.2 8.0891 232.2C10.1327 232.2 12.1762 231.519 13.8792 229.816L116.057 127.638L218.236 229.816C219.939 231.519 221.982 232.2 224.026 232.2C226.069 232.2 228.113 231.519 229.816 229.816C232.881 226.75 232.881 221.301 229.816 218.236L127.638 116.057L229.816 13.8792C232.881 10.8139 232.881 5.70495 229.816 2.29901Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="w-full p-[20px] md:p-[40px] login_right bg-[#fff]">
              <div className="flex mb-8 space-x-2 px-[36px] pb-2 mt-[30px]">
                <button className="btnone bg-[#DEE6FF] text-[#1E3A8A] text-xs font-bold rounded-md shadow-[0px_0px_8px_0px_rgba(18,18,18,0.1)]">
                  Login
                </button>
                <button
                  className="btnone rounded-md"
                  onClick={() => toggleSignupForm(true)}
                >
                  Sign Up
                </button>
              </div>

              <div className="left-cont">
                <h2 className="text-[16px] leading-[20px] font-bold mb-[8px] text-[#0A0A0A]-500">
                  Welcome back
                </h2>
                <p className="text-[12px] leading-[16px] font-[400] text-[#848282]-500 mb-[20px]">
                  Enter your credentials to get started
                </p>{" "}
              </div>

              <form
                onSubmit={(e) => handleLoginSubmit(e)}
                className="formsubmit space-y-3"
              >
                {error && <div className="text-[12px] text-[#ff0000] text-left">
                  * {error}
                </div>}
                <div className="mb-[16px]">
                  <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
                    <img src={form2} alt="Welcome Icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    placeholder="Nancy@email.com"
                    className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                    required
                  />
                </div>

                <div>
                  <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
                    <img src={form3} alt="Welcome Icon" />
                    Password
                  </label>
                  <input
                    type="password"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="••••••••"
                    className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                    required
                  />
                  <a
                    href="#"
                    className="text-[12px] leading-[16px] font-[400] text-[#E70303] no-underline mt-1 block text-left mt-[2px]"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="login-sty w-full bg-[#1E3A8A] text-[12px] leading-[16px] font-[400] text-[#ffffff] py-[12px] mt-[10px] rounded-[8px] hover:bg-[#1E3A8A] transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20 mx-[20px]">
          <div className="w-full max-w-xl bg-[#FFFFFF] p-[20px] rounded-lg text-center max-h-[90vh] overflow-y-auto hide_scrollbar">
            <div
              className="cursor-pointer flex justify-end"
              onClick={() => toggleSignupForm(false)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 233 233"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M229.816 2.29901C226.75 -0.766337 221.301 -0.766337 218.236 2.29901L116.057 104.477L13.8792 2.29901C10.8139 -0.766337 5.36436 -0.766337 2.29901 2.29901C-0.766337 5.36436 -0.766337 10.8139 2.29901 13.8792L104.477 116.057L2.29901 218.236C-0.766337 221.301 -0.766337 226.75 2.29901 229.816C4.00198 231.519 6.04554 232.2 8.0891 232.2C10.1327 232.2 12.1762 231.519 13.8792 229.816L116.057 127.638L218.236 229.816C219.939 231.519 221.982 232.2 224.026 232.2C226.069 232.2 228.113 231.519 229.816 229.816C232.881 226.75 232.881 221.301 229.816 218.236L127.638 116.057L229.816 13.8792C232.881 10.8139 232.881 5.70495 229.816 2.29901Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="w-full p-[20px] md:p-[40px] login_right bg-[#fff]">
              <div className="flex mb-8 space-x-2 px-[36px] pb-2 mt-[30px]">
                <button
                  className="btnone rounded-md"
                  onClick={() => toggleLoginForm(true)}
                >
                  Login
                </button>
                <button className="btnone bg-[#DEE6FF] text-[#1E3A8A] text-xs font-bold rounded-md shadow-[0px_0px_8px_0px_rgba(18,18,18,0.1)]">
                  Sign Up
                </button>
              </div>

              <div className="left-cont">
                <h2 className="text-[16px] leading-[20px] font-bold mb-[8px] text-[#0A0A0A]-500">
                  Create your account
                </h2>
                <p className="text-[12px] leading-[16px] font-[400] text-[#848282]-500 mb-[20px]">
                  Start your personalized AI coaching journey
                </p>{" "}
              </div>

              <form onSubmit={(e) => handleSignupSubmit(e)} className="formsubmit space-y-3">
                {error && <div className="text-[12px] text-[#ff0000] text-left">
                  * {error}
                </div>}
                <div className="mb-[16px]">
                  <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
                    <img src={form1} alt="Welcome Icon" />
                    Name
                  </label>
                  <input
                    type="name"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="Nancy"
                    className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                    required
                  />
                </div>
                <div className="mb-[16px]">
                  <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
                    <img src={form2} alt="Welcome Icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    placeholder="Nancy@email.com"
                    className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                    required
                  />
                </div>

                <div className="mb-[16px]">
                  <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
                    <img src={form3} alt="Welcome Icon" />
                    Password
                  </label>
                  <input
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="••••••••"
                    className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="login-sty w-full bg-[#1E3A8A] text-[12px] leading-[16px] font-[400] text-[#ffffff] py-[12px] mt-[10px] rounded-[8px] hover:bg-[#1E3A8A] transition"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
