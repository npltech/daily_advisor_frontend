import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='flex w-full flex-wrap h-screen overflow-hidden'>
        <div className='w-[100%] sm:w-[35%] lg:w-[20%] p-[20px] lg:p-[0px] h-screen overflow-y-auto'>
            <Sidebar />
        </div>        
        <div className='w-[100%] sm:w-[65%] lg:w-[80%]'>
            <Navbar1 />
            <div className="overflow-y-auto h-[calc(100vh-40px)]">
              <Outlet />
            </div>            
        </div>
    </div>
  )
}

export default Userlayout