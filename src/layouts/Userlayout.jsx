import React, { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='flex w-full flex-wrap h-screen overflow-hidden'>
        <div
          className={`h-screen overflow-y-auto transition-all duration-300 
            ${collapsed ? "w-[100px]" : "w-[100%] sm:w-[35%] lg:w-[20%]"}`}
        >
            <Sidebar collapsed={collapsed} />
        </div>        
        <div className={`transition-all duration-300 
            ${collapsed ? "w-[calc(100%-100px)]" : "w-[100%] sm:w-[65%] lg:w-[80%]"}`}
        >
            <Navbar1 collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="overflow-y-auto h-[calc(100vh-40px)]">
              <Outlet />
            </div>            
        </div>
    </div>
  )
}

export default Userlayout