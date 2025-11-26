// src/components/Login.jsx
import React, { useState } from "react";
import login from "../assets/images/login.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import withbg from "../assets/images/withbg.png";
import form1 from "../assets/images/form1.png";
import form2 from "../assets/images/form2.png";
import form3 from "../assets/images/form3.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../apis/userApi";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, name);
    const postdata = {
      first_name: name,
      user_email: email,
      user_password: password,
    };

    await registerUser(postdata)
      .then((res) => {
        console.log(res);
        Swal.fire({
            icon: "success",
            title: res?.message,
            confirmButtonColor: "#3085d6",
        })
        .then(()=>{
          navigate(`/login`);
        });        
      })
      .catch((err) => {
        Swal.fire({
            icon: "error",
            title: err?.response?.data?.message || err?.message || 'Something went wrong!!',
            confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <div className="w-full min-h-screen p-[20px] md:p-[40px] bg-[#FFFFFF] flex items-center justify-center">
      <div className="w-full flex min-h-screen items-center bg-gray-50 login_main">
        <div className="box-style flex w-full flex-wrap rounded-[30px] shadow-lg bg-white ">
          {/* Left Section */}
          <div className="shape-one w-full md:w-1/2 bg-[url('/src/assets/images/shape.png')] bg-no-repeat bg-auto bg-right-top bg-[#1E3A8A] text-[#DBEAFE]  flex flex-col justify-center  login-left gap-[10px] text-[14px] leading-[18px] ">
            <div className="star-icon">
              <img src={login} alt="Login Icon" className="w-auto" />
            </div>
            <h1 className="welcome-heading text-2xl font-semibold mb-2">
              Welcome to Daily Advisor AI
            </h1>
            <p className="wel-para text-[14px] font-[400] text-[#DBEAFE]-200 mb-6">
              Your personalized AI coach that understands YOUR goals, YOUR
              journey, and YOUR growth.
            </p>

            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2">
                <div className="listicon">
                  <img src={withbg} alt="Welcome Icon" />
                </div>
                Structured onboarding tailored to you
              </li>
              <li className="flex items-center gap-2">
                <div className="listicon">
                  <img src={withbg} alt="Welcome Icon" />
                </div>
                Goal-driven daily insights
              </li>
              <li className="flex items-center gap-2">
                <div className="listicon">
                  <img src={withbg} alt="Welcome Icon" />
                </div>
                Continuous learning and adaptation
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="right-section w-full md:w-1/2 p-[20px] md:p-[40px] flex flex-col justify-center login_right bg-[#fff]">
            <div className="btn-login flex mb-8 space-x-2 border-[1px] pb-2">
              <Link to="/login" className="btnone">
                Login
              </Link>
              <button className="btnone">Sign Up</button>
            </div>

            <div className="left-cont">
              <h2 className="text-[16px] leading-[20px] font-[500] mb-[8px] text-[#0A0A0A]-500">
                Create your account
              </h2>
              <p className="text-[12px] leading-[16px] font-[400] text-[#4B5563]-500 mb-[20px]">
                Start your personalized AI coaching journey
              </p>{" "}
            </div>

            <form onSubmit={handleSubmit} className="formsubmit space-y-4">
              <div>
                <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600">
                  <img src={form1} alt="Welcome Icon" />
                  Name
                </label>
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nancy"
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                />
              </div>
              <div>
                <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600">
                  <img src={form2} alt="Welcome Icon" />
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nancy@email.com"
                  className="border-sty mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2b74]"
                  required
                />
              </div>

              <div>
                <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600">
                  <img src={form3} alt="Welcome Icon" />
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="continue my-[20px] flex items-center justify-center text-[#E4E4E4]-500 text-sm">
              <span className="border-t border-[#E4E4E4]-100 w-1/3"></span>
              <span className="mx-2 text-[10px] font-[400] leading-[14px]">
                or continue with
              </span>
              <span className="border-t border-[#E4E4E4]-100 w-1/3"></span>
            </div>

            <div className="bottom-social flex space-x-3">
              <button className="social-btn w-1/2 border rounded-[12px] py-2 flex items-center justify-center gap-[10px] text-[12px] text-[#0A0A0A]">
                <img src={google} alt="Google Icon" />
                Google
              </button>
              <button className="social-btn w-1/2 border rounded-[12px] py-2 flex items-center justify-center gap-[10px] text-[12px] text-[#0A0A0A]">
                <img src={apple} alt="Apple Icon" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
