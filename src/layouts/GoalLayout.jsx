import React from 'react';
import { Outlet } from 'react-router-dom'

const GoalLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default GoalLayout