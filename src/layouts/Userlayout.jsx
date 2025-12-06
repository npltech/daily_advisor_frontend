import React, { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='flex items-stretch w-full h-screen overflow-hidden'>
        <div
          className={`h-screen overflow-y-auto transition-all duration-300 
            ${collapsed ? "w-[0px]" : "w-[40%] md:w-[35%] lg:w-[20%]"}`}
        >
            <Sidebar collapsed={collapsed} />
        </div>        
        <div className={`transition-all duration-300 
            ${collapsed ? "w-[calc(100%-0%)]" : "w-[60%] md:w-[65%] lg:w-[80%]"}`}
        >
            <Navbar1 collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="overflow-y-auto h-[calc(100vh-40px)] bg-[#F5F7FA] pt-[24px]">
              <Outlet />
            </div>            
        </div>
    </div>
  )
}

export default Userlayout