import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/authSlice.js';
import { lastConversation } from '../apis/conversationApi.js';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userToken = useSelector((state) => state.auth.token);

  useEffect(()=>{    
    const token = Cookies.get("accessToken");
    
    if(token){
      dispatch(loginUser(token));      
    }
  }, [])

  useEffect(()=>{
    if(userToken){
      const decoded = jwtDecode(userToken);
      
      if (decoded?.setup_completed) {
        if(location.pathname.startsWith('/goal') || location.pathname.startsWith('/login')){
          // navigate("/user");
        }
      } else {
        fetchLastConversation();            
      }
      // if(!decoded?.conversation_intiated){
      //   navigate("/goal/create");
      // }else if(decoded?.conversation_intiated && !decoded?.setup_completed){
      //   navigate("/goal/question");
      // }else{
      //   navigate("/user/chatbot");
      // }
    }    
  }, [userToken])

  const fetchLastConversation = async () => {
    await lastConversation()
      .then((res) => {
        if(res?.status){
          navigate("/goal/questions");
        }else{
          navigate("/goal/create");
        }
      })
      .catch((err) => {
        console.log('ddd', err)
      });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/goal" element={
        <ProtectedRoute>
          <GoalLayout />
        </ProtectedRoute>}>
        <Route path="create" element={<CreateGoal />} />
        <Route path="questions" element={<AiQuestion />} />
      </Route>
      <Route path="/user" element={
        <ProtectedRoute>
          <Userlayout />
        </ProtectedRoute>}>
        <Route path="" element={<Dashboard />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="onboarding" element={<Onboarding />} />        
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="creategoal" element={<CreateGoal />} />
        <Route path="question" element={<AiQuestion />} />
        <Route path="goals" element={<Goals />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes