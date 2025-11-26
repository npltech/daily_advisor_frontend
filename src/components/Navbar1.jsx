import React from "react";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar1 = () => {
  const navigate = useNavigate();

  const logoutUser = ()=>{
    Cookies.remove("accessToken");
    navigate("/login");
  }

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
      <div>
        <p onClick={logoutUser}>Logout</p>
      </div>
    </nav>
  );
};

export default Navbar1;
