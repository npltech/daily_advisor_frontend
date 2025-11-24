import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FcApproval, FcOk } from 'react-icons/fc';
import { FiEdit2 } from 'react-icons/fi';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { LuCalendar } from 'react-icons/lu';
import { MdOutlineCircle } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const Goals = () => {
  return (
    <div className="Goals-section-one mt-[40px] ml-[20px]">
              {/* Title */}
              <h2 className="text-[20px] sm:text-[24px] leading-[28px] font-[800] text-[#0A0A0A] mb-[5px]">
                Goal Review
              </h2>
              <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
                Track and update your goals
              </p>
              
               <div className="Goal-bor w-[1080px] bg-[#ffffff] border-l-[4px] border-[#E6C26B] rounded-[8px] shadow-sm p-[16px]">
      
      {/* Top Row */}
      <div className="flex justify-between items-start">
        
        {/* Left Content */}
        <div>
          {/* Badge */}
          <span className="personal-icon px-[10px] py-[5px] bg-[#FFF8E6] text-[#E6C26B] font-[400] text-[14px] flex items-center gap-[5px] rounded-[16px] ">
            <span className="w-2 h-2 bg-yellow-500"></span><IoIosCheckmarkCircleOutline />
            Personal
          </span>

          {/* Title */}
          <h2 className="mt-[10px] text-[16px] font-[700] leading-[20px] text-[#0A0A0A] mb-[5px]">
            Learn Spanish
          </h2>

          {/* Subtext */}
          <p className="text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[20px]">
            Reach conversational fluency in Spanish
          </p>
        </div>

        {/* Right Icons + Date */}
        <div className="flex flex-col items-end gap-[10px] text-sm text-gray-500">
          <div className="flex gap-[10px] text-gray-400 cursor-pointer">
            <div className="goals-icon-right text-[#848282] w-[12px] h-[12px]"><FiEdit2 /></div>
            <div className="goals-icon-del text-[#E7000B] w-[12px] h-[12px]"><RiDeleteBinLine /></div>
          </div>

          <div className="flex gap-[5px] items-center text-[#848282] text-[14px] font-[400] mt-[20px]">
            <i className="ri-calendar-line"></i>
            <LuCalendar />Target: 17/11/2025
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mt-6">
        <div className="flex justify-between text-[#4B5563] font-[400] text-[14px] leading-[18px] mb-[10px]">
          <span>Progress</span>
          <span>85%</span>
        </div>

        <div className="w-full h-[8px] bg-[#F2F2F2] rounded-[16px] overflow-hidden mb-[20px]">
          <div
            className="h-full bg-[#E6C26B] rounded-[16px] transition-all duration-700"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-6 p-[16px] bg-[#FFF8E6] rounded-[14px]">
        <h3 className="text-[#0A0A0A] font-[700] text-[16px] mb-[10px]">Milestones</h3>

        <ul className="space-y-3 text-sm ">
          <li className="flex items-center gap-[12px] mb-[10px]">
            <span className="rounded-full flex items-center justify-center text-xs"><FcApproval />
</span>
            <span className="line-through text-[#4B5563] font-[400] leading-[18px] text-[14px]">Complete beginner course</span>
          </li>

          <li className="flex items-center gap-[12px] mb-[10px]">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"><FcApproval />
</span>
            <span className="text-gray-800 text-[14px] line-through text-[#4B5563] font-[400] leading-[18px] text-[14px]">Practice daily for 30 days</span>
          </li>

          <li className="flex items-center gap-[12px] mb-[10px]">
            <span className="icon-check "><FcApproval />
</span>
            <span className="text-[#0A0A0A] font-[600]">Have first conversation</span>
          </li>
        </ul>
      </div>
    </div>
                        </div>
              
  );
};

export default Goals;
