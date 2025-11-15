import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div className='flex'>
        <div className='w-[10%]'>
            <Sidebar />
        </div>        
        <div className='w-full'>
            <Navbar1 />
            <Outlet />
        </div>
    </div>
  )
}

export default Userlayout