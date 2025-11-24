import React from "react";
import { BsList } from "react-icons/bs";

const Navbar1 = () => {
  return (
    <nav className="bg-white w-full p-4 flex items-center">
      {/* Menu Icon */}
      <div className="toggle-icon mr-3 cursor-pointer text-gray-700">
        <BsList />
      </div>

      {/* Title & Date */}
      <div>
        <h1 className="text-[14px] font-normal text-[#171717] leading-[20px]">
          Dashboard Overview
        </h1>
        <p className="text-[12px] text-[#737373] font-[400] leading-[16px]">
          Thursday, November 6
        </p>
      </div>
    </nav>
  );
};

export default Navbar1;
