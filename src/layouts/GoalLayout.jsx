import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";

const GoalLayout = () => {
  const navigate = useNavigate();

  const logoutUser = ()=>{
    Cookies.remove("accessToken");
    navigate("/login");
  }

  return (
    <div className='h-full'>
      <button type='button' className='fixed top-4 right-4 text-sm text-blue-600 font-semibold shadow-b-sm' onClick={logoutUser}>Logout</button>
        <Outlet />
    </div>
  )
}

export default GoalLayout