import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='flex w-full flex-wrap'>
        <div className='w-[100%] sm:w-[35%] lg:w-[25%] p-[20px] lg:p-[0px]'>
            <Sidebar />
        </div>        
        <div className='w-[100%] sm:w-[65%]  lg:w-[75%] '>
            <Navbar1 />
            <Outlet />
        </div>
    </div>
  )
}

export default Userlayout