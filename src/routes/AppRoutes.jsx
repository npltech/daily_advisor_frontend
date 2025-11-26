import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Signup from '../pages/Signup.jsx';
import Welcome from '../pages/Welcome.jsx';
import Onboarding from '../pages/Onboarding.jsx';
import Chatbot from '../pages/Chatbot.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Userlayout from '../layouts/Userlayout.jsx';
import CreateGoal from '../pages/CreateGoal.jsx';
import AiQuestion from '../pages/AiQuestion.jsx';
import Goals from '../pages/Goals.jsx';
import GoalLayout from '../layouts/GoalLayout.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/goal" element={<GoalLayout />}>
        <Route path="creategoal" element={<CreateGoal />} />
        <Route path="aiquestion" element={<AiQuestion />} />
      </Route>
      <Route path="/user" element={<Userlayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="onboarding" element={<Onboarding />} />        
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="creategoal" element={<CreateGoal />} />
        <Route path="aiquestion" element={<AiQuestion />} />
        <Route path="goals" element={<Goals />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes