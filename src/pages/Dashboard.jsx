import React, { useEffect, useRef, useState } from "react";
import score from "../assets/images/score.png";
import goaldeshboard from "../assets/images/goaldeshboard.png";
import insight from "../assets/images/insight.png";
import scorestar from "../assets/images/scorestar.png";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { BiMessageRoundedDots } from "react-icons/bi";
import { AiFillApi, AiOutlineApi } from "react-icons/ai";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const ProgressItem = ({ title, percent, color }) => {
  return (
    <div className="mb-[16px]">
      <div className="flex justify-between text-[14px] leading-[20px] font-[500] mb-[4px] text-[#0A0A0A]">
        <span>{title}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full h-[8px] bg-[#F5F5F5] rounded-[16px]">
        <div
          className="h-full rounded-full transition-all duration-[700]"
          style={{
            width: `${percent}%`,
            background: color,
          }}
        ></div>
      </div>
    </div>
  );
};

const ActivityItem = ({ title, time }) => {
  return (
    <div className="flex justify-between items-center py-[12px] border-b border-[#E4E4E4]">
      <div className="flex items-start gap-3">
        <div className="rounded-[6px] p-[5px] bg-[#EBF1FF] mr-[10px]  ">
          <AiOutlineApi />
        </div>

        <div>
          <p className="text-[12px] leading -[16px] font-[400] text-[#0A0A0A]">
            {title}
          </p>
          <span className="text-[10px] text-[#4B5563] font-[400] leading-[14px]">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

const data = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 60 },
  { name: "Wed", value: 100 },
  { name: "Thu", value: 70 },
  { name: "Fri", value: 80 },
  { name: "Sat", value: 55 },
  { name: "Sun", value: 110 },
];

const habitdata = [
  { name: "Morning workout", value: 80 },
  { name: "Reading", value: 40 },
  { name: "Meditation", value: 70 },
  { name: "Drink water", value: 50 },
  { name: "Sleep 8hrs", value: 65 },
];

const Deshboard = () => {
  const progressRef = useRef(null);
  const [value, setValue] = useState(0);
  const [percent, setPercent] = useState(87);
  const [userData, setUserData] = useState(null);
  const userToken = useSelector((state) => state.auth.token);

  useEffect(()=>{
    if(userToken){
      const decoded = jwtDecode(userToken);
      setUserData(decoded);
    }
  }, [userToken])

  useEffect(() => {
    const circle = progressRef.current;
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    let current = 0;

    const interval = setInterval(() => {
      if (current >= percent) {
        clearInterval(interval);
      } else {
        current++;
      }

      // Animate circle
      const offset = circumference - (current / 100) * circumference;
      circle.style.strokeDashoffset = offset;

      // Animate number
      setValue(current);
    }, 15);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div className="w-full bg-[#F5F7FA] p-[40px]">
      {/* Header */}
      <h1 className="text-[20px] md:text-[24px] font-[700] leading-[24px] md:leading-[28px] text-[#0A0A0A]">
        {userData!==null && userData.fname}
      </h1>
      <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mt-[10px] mb-[20px]">
        Here's your progress overview for today
      </p>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[40px] mt-[10px] md:mt-6">
        {/* Daily Score */}
        <div className="daily-score bg-[#ffffff] p-[16px] rounded-[12px] shadow-sm border-[2px] border-[#E5F2FF] flex justify-between align-center  mt-[10px] md:mb-[40px] h-[84px]">
          {/* Top Section */}
          <div>
            <p className="text-[#4B5563] font-[400] text-[12px] leading-[16px]">
              Daily Score
            </p>

            <div className="flex items-center gap-2">
              <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A]">
                87
              </h2>

              {/* Up Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="[#00A63E]"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="[currentColor]"
                className="w-[12px] h-[12px] text-[#00A63E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span className="text-[#00A63E] text-[12px] font-[400] leading-[16px]">
                +12%
              </span>
            </div>
          </div>

          {/* Right Icon Box */}
          <div className="">
            <img src={score} alt="Score Icon" className="w-full" />
          </div>
        </div>

        <div className="daily-score bg-[#ffffff] p-[16px] rounded-[12px] shadow-sm border-[2px] border-[#E5F2FF] flex justify-between align-center  mt-[10px] md:mb-[40px] h-[84px]">
          {/* Center Section */}
          <div>
            <p className="text-[#4B5563] font-[400] text-[12px] leading-[16px]">
              Goals
            </p>

            <div className="flex items-center gap-2">
              <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A]">
                3
              </h2>

              {/* Up Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="[#00A63E]"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="[currentColor]"
                className="w-[12px] h-[12px] text-[#00A63E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span className="text-[#00A63E] text-[12px] font-[400] leading-[16px]">
                3 active
              </span>
            </div>
          </div>

          {/* Right Icon Box */}
          <div className="w-[64px]">
            <img
              src={goaldeshboard}
              alt="Goaldeshboard Icon"
              className="w-full"
            />
          </div>
        </div>
        <div className="daily-score bg-[#ffffff] p-[16px] rounded-[12px] shadow-sm border-[2px] border-[#E5F2FF] flex justify-between align-center  mt-[10px]  md:mb-[40px] h-[84px]">
          {/* Right Section */}
          <div>
            <p className="text-[#4B5563] font-[400] text-[12px] leading-[16px]">
              Tasks Done
            </p>

            <div className="flex items-center gap-2">
              <h2 className="text-[24px] leading-[28px] font-[700] text-[#0A0A0A]">
                11/15
              </h2>

              {/* Up Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="[#00A63E]"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="[currentColor]"
                className="w-[12px] h-[12px] text-[#00A63E]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span className="text-[#00A63E] text-[12px] font-[400] leading-[16px]">
                73%
              </span>
            </div>
          </div>
          <div className="">
            <img src={score} alt="Score Icon" className="w-full" />
          </div>
        </div>
      </div>

      {/* Parent Wrapper → REQUIRED for 50/50 layout */}
      <div className="flex  flex-col lg:flex-row w-full gap-[12px] mt-6">
        {/* LEFT 50% */}
        <div className="flex flex-col md:flex-row gap-[10px] lg:gap-[25px] xl:gap-[56px] w-full  lg:w-[65%] p-[16px] rounded-[12px] shadow-sm border-[1px] border-[#E4E4E4] bg-[#FFFFFF]">
          {/* Card 1 — AI Insight */}
          <div className="flex flex-col justify-between w-full md:[w-60%] lg:w-[85%]">
            <div>
              <h3 className="text-[14px] leading-[18px] font-[700] text-[#0A0A0A]">
                AI Insight of the Day
              </h3>
              <p className="text-[#4B5563] text-[12px] mt-[5px] leading-[16px] font-[400]">
                Based on your patterns, you're most productive between 9 AM - 12
                PM. Consider scheduling your most important tasks during this
                window for optimal results.
              </p>
            </div>

            <button className="insight-btn text-[#1E3A8A] flex items-center gap-[10px] text-[14px] font-[400] mt-3">
              Get more insights
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[12px] h-[12px] text-blue-600"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>

          {/* Icon Card */}
          <div className="w-full md:[w-40%]  lg:[w-15%] flex items-center justify-end">
            <img src={insight} alt="Insight Icon" className=" w-full lg:w-[100%] xl:w-[70%] h-auto" />
          </div>
        </div>

        {/* RIGHT 50% — Blue Score Card */}
        <div className="w-full lg:w-[35%] p-[16px] bg-[url('/src/assets/images/todayscore.png')] bg-no-repeat bg-[length:100%_100%] text-[#ffffff] flex justify-between items-top shadow-sm">
          {/* Text Section */}
          <div className="left_part_score w-[60%] p-[16px]">
            <div className="flex pt-[16px]">
              <img src={scorestar} alt="Star Icon" className="w-6 h-6" />
              <p className="text-[14px] leading-[18px] font-[400] text-[#E6C26B] opacity-90 ml-[10px] mt-[3px]">
                Today's Score
              </p>
            </div>
            <p className="text-[12px] leading-[16px] font-[400] mt-[10px] opacity-80">
              You’re performing better than 85% of users
            </p>
          </div>

          <div className="w-40 h-40 flex items-center justify-center relative">
            <svg className="w-full h-full -rotate-90 overflow-visible">
              <circle
                cx="50%"
                cy="50%"
                r="70"
                stroke="#5561DB"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />

              <circle
                ref={progressRef}
                cx="50%"
                cy="50%"
                r="70"
                stroke="#E6C26B"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 0.3s linear",
                }}
              />
            </svg>

            <div className="absolute text-center text-white">
              <h2 className="text-[46px] font-[700] leading-[51px] text-[#F2F2F2]">
                {value}
              </h2>
              <p className="text-[14px] leading-[18px] font-[500] text-[#F2F2F2]">
                Excellent!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row Container */}
      <div className="flex flex-col lg:flex-row w-full  gap-[10px] mt-[40px]">
        {/* LEFT CARD — WEEKLY PROGRESS */}
        <div className="w-full lg:w-[65%] bg-[#ffffff] p-[24px] rounded-[16px] shadow-sm border-[1px] border-[#E4E4E4]">
          {/* Header */}
          <div className="flex justify-between items-start mb-[40px]">
            <div>
              <h2 className="text-[14px] leadind-[18px] font-[700]">
                Weekly Progress
              </h2>
              <p className="text-[12px] leading-[16px] text-[#4B5563]-font-[400]">
                Your performance over the last 7 days
              </p>
            </div>

       
            <div className="flex gap-[10px]">
              <button className="week-btn px-[10px] py-[5px] text-[12px] leading-[16px] font-[500] rounded-[10px] bg-[#F1F4FF] text-[#1E3A8A]">
                Week
              </button>
              <button className="month-btn px-[10px] py-[5px] text-[12px] leading-[16px] font-[500] text-[#4B5563] bg-[transparent]">
                Month
              </button>
            </div>
          </div>

       
          <div className="w-full h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <defs>
                  <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4C63E6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#4C63E6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#1C3FAA"
                  fill="url(#colorFill)"
                  fillOpacity={1}
                />

                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1C3FAA"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex w-full lg:w-[35%]">
          <div className="w-full bg-[#ffffff] p-[24px] rounded-[16px] shadow-sm border-[1px] border-[#E4E4E4]">
      
            <div className="flex justify-between items-start mb-[40px]">
              <div>
                <h2 className="text-[14px] leadind-[18px] font-[700]">
                  Habit Tracking
                </h2>
                <p className="text-[12px] leading-[16px] text-[#4B5563]-font-[400]">
                  Track your daily habits
                </p>
              </div>
              <div className="flex gap-[10px]">
                <button className="week-btn px-[10px] py-[5px] text-[12px] leading-[16px] font-[500] rounded-[10px] bg-[#F1F4FF] text-[#1E3A8A]">
                  Week
                </button>
                <button className="month-btn px-[10px] py-[5px] text-[12px] leading-[16px] font-[500] text-[#4B5563] bg-[transparent]">
                  Month
                </button>
              </div>
            </div>
            <div className="w-full" style={{ height: 260 }}>
              <div className="w-full h-full p-4 rounded-2xl bg-white shadow">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={habitdata} barCategoryGap="30%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      axisLine={false}
                      tickLine={false}
                    />

                    <Tooltip
                      cursor={{ fill: "rgba(0,0,0,0.05)" }}
                      contentStyle={{
                        borderRadius: "12px",
                        padding: "8px 12px",
                        border: "1px solid #e5e7eb",
                      }}
                    />

                    <Bar
                      dataKey="value"
                      fill="#1C3FAA"
                      radius={[8, 8, 8, 8]}
                      barSize={32}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row w-full gap-[16px] mt-[30px]">
      
        <div className="progress-bar-style2 w-full lg:w-[35%] bg-[#FFFFFF] p-[16px] rounded-[16px] shadow-sm border border-[#E4E4E4]">
          <h3 className="text-[14px] leading-[18px] font-[700] text-[#0A0A0A] mb-[5px]">
            Goal Progress
          </h3>

          <p className="text-[12px] leading-[16px] text-[#4B5563] font-[400] mb-[20px]">
            Track your key objectives
          </p>

          <ProgressItem title="Career" percent={85} color="#6366F1" />
          <ProgressItem title="Health" percent={72} color="#097153" />
          <ProgressItem title="Personal" percent={68} color="#E6C26B" />
          <ProgressItem title="Finance" percent={91} color="#1E3A8A" />

          <p className="text-center text-[12px] text-[#404040] font-400 mt-[12px] cursor-pointer border-t-[1px] border-[#E5E5E5] pt-[12px] pb-[4px]">
            View all
          </p>
        </div>

        {/* RIGHT — RECENT ACTIVITY */}
        <div className="w-full lg:w-[65%] bg-[#FFFFFF] p-[16px] rounded-[16px] shadow-sm border border-[#E4E4E4]">
          <div className="flex justify-between items-center mb-[10px]">
            <div>
              <h3 className="text-[14px] leading-[18px] font-[700] text-[#0A0A0A] mb-[5px]">
                Recent Activity
              </h3>
              <p className="text-[12px] leading-[16px] text-[#4B5563] font-[400] mb-[px]">
                Your latest achievements
              </p>
            </div>

            {/* Ask AI Button */}
          </div>

          {/* List */}
          <div className="mt-[10px]">
            <ActivityItem title="Completed morning workout" time="9:30 AM" />
            <ActivityItem title="Daily check-in completed" time="10:15 AM" />
            <ActivityItem title="Goal milestone reached" time="2:45 PM" />
            <ActivityItem title="Goal milestone reached" time="2:45 PM" />
            <ActivityItem title="Meditation session" time="4:00 PM" />
          </div>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-[#1E3A8A] text-[#FFFFFF] rounded-[70px] shadow-sm flex items-center gap-[4px]
 p-[12px] text-[14px] leading-[16px] font-[500] border-[1px] border-[1E3A8A] fixed right-[65px] bottom-[122px]"
      >
        <BiMessageRoundedDots />
        Ask AI
      </button>
    </div>
  );
};

export default Deshboard;
