import React from "react";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar1 = () => {
  const navigate = useNavigate();
  const heading = useSelector((state) => state.nav.heading); 

  return (
    <nav className="bg-white w-full p-4 flex items-center sticky top-0 z-50 shadow-sm">
      {/* Menu Icon */}
      <div className="toggle-icon mr-3 cursor-pointer text-gray-700">
        <BsList />
      </div>

      {/* Title & Date */}
      <div>
        <h1 className="text-[14px] font-normal text-[#171717] leading-[20px]">
          {heading}
        </h1>
        <p className="text-[12px] text-[#737373] font-[400] leading-[16px]">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>      
    </nav>
  );
};

export default Navbar1;
