// src/components/Login.jsx
import React, { useEffect, useState } from "react";
import login from "../assets/images/login.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import withbg from "../assets/images/withbg.png";
import form1 from "../assets/images/form1.png";
import form2 from "../assets/images/form2.png";
import form3 from "../assets/images/form3.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginApi } from "../apis/userApi";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/slices/loaderSlice";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "../store/slices/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(hideLoader());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoader());

    const postdata = {
      username: email,
      password: password,
    };

    await loginApi(postdata)
      .then((res) => {
        if (res?.accessToken) {
          dispatch(loginUser(res.accessToken));
          // const decoded = jwtDecode(res.accessToken);
          // console.log("Decoded Token:", decoded);
          // if(!decoded?.conversation_intiated){
          //   navigate("/goal/create");
          // }else if(decoded?.conversation_intiated && !decoded?.setup_completed){
          //   navigate("/goal/question");
          // }else{
          //   navigate("/user/chatbot");
          // }
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(hideLoader());
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text:
            err?.response?.data?.message ||
            err?.message ||
            "Something went wrong!!",
          confirmButtonColor: "#3085d6",
        });
      });
  };

  return (
    <div className="w-full p-[20px] bg-[#FFFFFF] flex items-center justify-center mt-[120px] md:mt-[60px]">
      <div className="w-full flex items-center login_main">
        <div className="box-style flex w-full flex-wrap rounded-[30px] shadow-lg bg-white">
          {/* Left Section */}
          <div className="hidden md:block w-full md:w-1/2 flex">
            <div className="flex_item_center w-full shape-one bg-[url('/src/assets/images/shape.png')] bg-no-repeat bg-auto bg-right-top bg-[#1E3A8A] text-[#DBEAFE] login-left gap-[10px] text-[14px] leading-[18px]">
              <div className="star-icon mb-4 bg-[#102768]">
                <img src={login} alt="Login Icon" className="w-auto" />
              </div>
              <h1 className="welcome-heading text-[#FFFFFF] text-[20px] sm:text-[24px] font-semibold mb-2">
                Welcome to Daily Advisor AI
              </h1>
              <p className="wel-para text-[14px] font-[400] text-[#DBEAFE]-200 mb-6">
                Your personalized AI coach that understands YOUR goals, YOUR
                journey, and YOUR growth.
              </p>

              <ul className="text-sm space-y-3">
                <li className="flex items-center gap-2 text-[#D1D5DC]">
                  <div className="listicon flex items-center gap-4">
                    <img src={withbg} alt="Welcome Icon" />
                  </div>
                  Structured onboarding tailored to you
                </li>
                <li className="flex items-center gap-2 text-[#D1D5DC]">
                  <div className="listicon flex items-center gap-4">
                    <img src={withbg} alt="Welcome Icon" />
                  </div>
                  Goal-driven daily insights
                </li>
                <li className="flex items-center gap-2 text-[#D1D5DC]">
                  <div className="listicon flex items-center gap-4">
                    <img src={withbg} alt="Welcome Icon" />
                  </div>
                  Continuous learning and adaptation
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-[20px] md:p-[40px] login_right bg-[#fff]">
            <div className="flex mb-8 space-x-2 px-[36px] pb-2 mt-[30px]">
              <button className="btnone bg-[#DEE6FF] text-[#1E3A8A] text-xs font-bold rounded-md shadow-[0px_0px_8px_0px_rgba(18,18,18,0.1)]">
                Login
              </button>
              <Link to="/signup" className="btnone rounded-md">
                Sign Up
              </Link>
            </div>

            <div className="left-cont">
              <h2 className="text-[16px] leading-[20px] font-bold mb-[8px] text-[#0A0A0A]-500">
                Welcome back
              </h2>
              <p className="text-[12px] leading-[16px] font-[400] text-[#848282]-500 mb-[20px]">
                Enter your credentials to get started
              </p>{" "}
            </div>

            <form onSubmit={handleSubmit} className="formsubmit space-y-3">
              <div className="mb-[16px]">
                <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
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
                <label className="flex gap-[5px] text-[12px] leading-[16px] font-[400] text-[#4B5563]-600 mb-[2px]">
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
    </div>
  );
}

export default Login;
