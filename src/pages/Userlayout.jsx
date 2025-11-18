import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='flex w-full'>
        <div className='w-[15%]'>
            <Sidebar />
        </div>        
        <div className='w-[85%]'>
            <Navbar1 />
            <Outlet />
        </div>
    </div>
  )
}

export default Userlayout