import React from 'react'
import creategoal from "../assets/images/creategoal.png";
import Button from "../assets/images/Button.png";
import { LuSend } from 'react-icons/lu';
import { CiCalendar } from 'react-icons/ci';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { CgMediaLive } from 'react-icons/cg';
import { FaArrowTrendUp } from 'react-icons/fa6';

const CreateGoal = () => {
  return (
    <div className="flex items-center justify-center py-[40px]">
      <div className="w-[900px] shadow-sm">

        {/* Icon */}
        <div className="mt-10 mb-[10px] flex justify-center">
          <img src={creategoal} alt="Create Icon" className="w-8 h-8" />
        </div>

        {/* Heading */}
       <h1 className="text-[40px] leading-[44px] font-[500] text-[#0A0A0A] text-center mb-[12px]">
           Welcome to{" "}
              <span className="bg-[linear-gradient(#F553DA,#CB59FF,#6541F2,#3385FF)] bg-clip-text text-transparent font-[700] ">
              Daily Advisor AI
           </span>
          </h1>

        {/* Subtitle */}
        <p className="text-{#0A0A0A} font-[400] mt-3 text-center max-w-2xl mx-auto text-[14px] leading-[18px] mb-[20px]">
          Your personalized space to reflect, plan, and grow—one conversation at a time,
          empowering you to understand your goals, track your progress, and make every day more intentional.
        </p>

        {/* Chat Box */}
        <div className="design-create w-full max-w-3xl mt-10 mx-auto mb-[20px]">
          <div className="bg-white px-[16px] py-[24px]">

            {/* Input */}
            <div className="goal-button flex items-center justify-center iconwithtext px-[24px] pl-[16px] gap-[8px]">
            <img src={creategoal} alt="Create Icon" className="w-[5%] h-[5%]" />
            <textarea
              placeholder="Ask AI a question or make a request:"
              className="w-full h-32 outline-none resize-none text-gray-800 border-none mb-[-15px]"
            ></textarea>
            <LuSend /></div>
          </div>
        </div>

        {/* Section Title */}
        <p className="text-[12px] leading-[16px] tracking-widest text-[#4B5563] font-[500] mt-12 text-center">
          WHAT WOULD YOU LIKE TO WORK ON TODAY?
        </p>
        <div className="w-full flex justify-center mt-[32px]">
  <div className="flex flex-row md:flex-row items-center gap-[20px] w-[900px]">

    {/* Card 1 */}
    <div className="border-style-goal bg-[#ffffff] w-[33%] p-[20px] rounded-[16px] border-[1px] border-[#ffffff] shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="icon-styleone bg-gradient-to-r from-[#2B7FFF] to-[#155DFC]" >
       <IoCalendarClearOutline />

        </div>

      <p className="text-[#0A0A0A] font-[400] mt-[10px] text-[14px] leading-[18px]">
        Start my daily check-in
      </p>
    </div>

    {/* Card 2 */}
    <div className="border-style-goal bg-[#ffffff] w-[33%] p-[20px] rounded-[16px] border-[1px] border-[#ffffff] shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="icon-styleone bg-gradient-to-r from-[#AD46FF] to-[#9810FA]" >
        <CgMediaLive />

      </div>
      <p className="text-[#0A0A0A] font-[400] mt-[10px] text-[14px] leading-[18px]">
        Review my goals for this week
      </p>
    </div>

   <div className="border-style-goal bg-[#ffffff] w-[33%] p-[20px] rounded-[16px] border-[1px] border-[#ffffff] shadow-md hover:shadow-lg transition cursor-pointer">
      <div className="icon-styleone bg-gradient-to-r from-[#FF6900] to-[#F4AC36]" >
        <FaArrowTrendUp />

      </div>
      <p className="text-[#0A0A0A] font-[400] mt-[10px] text-[14px] leading-[18px]">
        Show my progress insights
      </p>
    </div>

  </div>
</div>

        </div>

      </div>

  )
}

export default CreateGoal
