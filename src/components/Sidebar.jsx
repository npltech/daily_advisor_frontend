import React, { useEffect, useRef, useState } from "react";
import { getConversationList } from "../apis/conversationApi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import user from "../assets/images/user.png";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logoutUser } from "../store/slices/authSlice";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setNavHeading } from "../store/slices/navbarSlice";
import creategoal from "../assets/images/creategoal.png";

const headings = {
  "/user": "Dashboard Overview",
  "/user/dashboard": "Dashboard Overview",
  "/user/goals": "Goal Review",
  "/user/chatbot": "AI Conversation",
  "/user/insights": "Insights",
  "/user/checkin": "Daily Checkin",
}

const Sidebar = (props) => {
  const { collapsed } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [conversation, setConversation] = useState([]);
  const [searchParams] = useSearchParams();
  const chatid = searchParams.get("chatid");
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const userToken = useSelector((state) => state.auth.token);
  const [userData, setUserData] = useState(null);
  const location = useLocation();

  useEffect(()=>{
    if(userToken){
      const decoded = jwtDecode(userToken);
      setUserData(decoded);
    }
  }, [userToken])

  useEffect(()=>{
    const fetchHeading = ()=>{
      setNavbarHeading(headings[location.pathname]);
    }    

    fetchHeading();
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    const fetchConversations = async () => {
      await getConversations();
    };

    fetchConversations();  
  }, [chatid]);

  const getConversations = async () => {
    await getConversationList()
      .then((res) => {        
        if (res.length) {
          setConversation(res);
          if(location.pathname.startsWith('/user/chatbot')){
            if(!chatid){
              loadChat(res[0]?.id);
            }else{
              loadChat(chatid);
            }
          }
        }
      })
      .catch((err) => {});
  };

  const loadChat = (id) => {
    navigate(`/user/chatbot?chatid=${id}`);    
  };

  const loadPage = (path) => {
    navigate(path);
  };

  const logout = ()=>{
    Cookies.remove("accessToken");
    dispatch(logoutUser());   
  }

  const setNavbarHeading = (value)=>{
    dispatch(setNavHeading(value));
  }

  return (
    <div className="w-full flex flex-col justify-between h-full border-r bg-white gap-[20px] pt-2">
      <div>
        <h1 className="text-[20px] font-[600] text-[#1E3A8A] pt-[8px] mt-[30px] mb-[20px] flex justify-center align-center">
          {collapsed?
          (<img src={creategoal} alt="Create Icon" className="w-8 h-8" />):
          'Daily Advisor AI'}
        </h1>

        <h2 className="text-xs font-normal text-[#4B5563] leading-[20px] mb-[10px] pl-[16px] border-t pt-[16px]">
          Quick Actions
        </h2>

        <ul className="sidebar-style space-y-1 ml-[15px]">
          <li className={`${location.pathname==='/user' || location.pathname==='/dashboard'?'text-[#1E3A8A] font-semibold':'text-[#252F40] font-medium hover:text-[#1E3A8A]'} flex items-center gap-[10px] text-xs font-[500] leading-[18px] cursor-pointer pl-[10px] py-[6px]`}
            onClick={()=>loadPage('/user')}
          >
            <div>
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 12.25V7.58333C8.75 7.42862 8.68854 7.28025 8.57915 7.17085C8.46975 7.06146 8.32138 7 8.16667 7H5.83333C5.67862 7 5.53025 7.06146 5.42085 7.17085C5.31146 7.28025 5.25 7.42862 5.25 7.58333V12.25" stroke={`${location.pathname==='/user' || location.pathname==='/user/dashboard'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.75 5.83335C1.74996 5.66364 1.78694 5.49597 1.85838 5.34202C1.92981 5.18808 2.03397 5.05157 2.16358 4.94202L6.24692 1.44261C6.45749 1.26464 6.72429 1.16699 7 1.16699C7.27571 1.16699 7.54251 1.26464 7.75308 1.44261L11.8364 4.94202C11.966 5.05157 12.0702 5.18808 12.1416 5.34202C12.2131 5.49597 12.25 5.66364 12.25 5.83335V11.0834C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0834V5.83335Z" stroke={`${location.pathname==='/user' || location.pathname==='/user/dashboard'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {collapsed?'Dashboard':'Dashboard'}
          </li>

          <li className={`${location.pathname==='/user/checkin'?'text-[#1E3A8A] font-semibold':'text-[#252F40] font-medium hover:text-[#1E3A8A]'} flex items-center gap-[10px] text-xs font-[500] leading-[18px] cursor-pointer pl-[10px] py-[6px]`}
            onClick={()=>loadPage('/user/checkin')}
          >
            <div>
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="12" height="12" fill="white"/>
              <path d="M4 1V3" stroke={`${location.pathname==='/user/checkin'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 1V3" stroke={`${location.pathname==='/user/checkin'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke={`${location.pathname==='/user/checkin'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 5H10.5" stroke={`${location.pathname==='/user/checkin'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {collapsed?'Daily Check-in':'Daily Check-in'}            
          </li>

          <li className={`${location.pathname==='/user/goals'?'text-[#1E3A8A] font-semibold':'text-[#252F40] font-medium hover:text-[#1E3A8A]'} flex items-center gap-[10px] text-xs font-[500] leading-[18px] cursor-pointer pl-[10px] py-[6px]`}
            onClick={()=>loadPage('/user/goals')}
          >
            <div>
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3121_1829)">
              <rect width="12" height="12" fill="white"/>
              <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke={`${location.pathname==='/user/goals'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke={`${location.pathname==='/user/goals'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z" stroke={`${location.pathname==='/user/goals'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3121_1829">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            {collapsed?'Goal Review':'Goal Review'}
          </li>

          <li className={`${location.pathname==='/user/insights' || location.pathname==='/dashboard'?'text-[#1E3A8A] font-semibold':'text-[#252F40] font-medium hover:text-[#1E3A8A]'} flex items-center gap-[10px] text-xs font-[500] leading-[18px] cursor-pointer pl-[10px] py-[6px]`}
            onClick={()=> loadPage('/user/insights')}
          >
            <div>
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3121_1838)">
              <rect width="12" height="12" fill="white"/>
              <path d="M6 9V2.5" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 6.5C7.0674 6.37354 6.68742 6.11031 6.417 5.74975C6.14658 5.38919 6.00027 4.9507 6 4.5C5.99973 4.9507 5.85342 5.38919 5.583 5.74975C5.31258 6.11031 4.9326 6.37354 4.5 6.5" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.799 3.25007C8.91405 3.05081 8.98173 2.82776 8.99678 2.59816C9.01184 2.36857 8.97388 2.13859 8.88583 1.92601C8.79779 1.71344 8.66202 1.52397 8.48904 1.37226C8.31605 1.22055 8.11048 1.11066 7.88823 1.05111C7.66599 0.991561 7.43302 0.983935 7.20735 1.02882C6.98169 1.07371 6.76937 1.16992 6.58683 1.30999C6.4043 1.45006 6.25643 1.63025 6.15467 1.83661C6.05291 2.04297 5.99999 2.26998 6 2.50007C6.00001 2.26998 5.94709 2.04297 5.84533 1.83661C5.74357 1.63025 5.5957 1.45006 5.41317 1.30999C5.23063 1.16992 5.01831 1.07371 4.79265 1.02882C4.56698 0.983935 4.33401 0.991561 4.11177 1.05111C3.88952 1.11066 3.68395 1.22055 3.51096 1.37226C3.33798 1.52397 3.20221 1.71344 3.11417 1.92601C3.02612 2.13859 2.98816 2.36857 3.00322 2.59816C3.01827 2.82776 3.08595 3.05081 3.201 3.25007" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.99854 2.5625C9.29243 2.63807 9.56528 2.77952 9.79642 2.97616C10.0276 3.17279 10.2109 3.41944 10.3326 3.69742C10.4543 3.97541 10.5112 4.27745 10.4988 4.58066C10.4865 4.88387 10.4054 5.1803 10.2615 5.4475" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9.00007C9.44025 9.00005 9.8682 8.85476 10.2175 8.58675C10.5667 8.31873 10.8178 7.94296 10.9318 7.51771C11.0457 7.09246 11.0162 6.64149 10.8477 6.23475C10.6792 5.828 10.3813 5.48821 10 5.26807" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.9835 8.7417C10.0185 9.01282 9.99763 9.28824 9.92205 9.55096C9.84648 9.81368 9.71785 10.0581 9.54411 10.2692C9.37036 10.4802 9.15519 10.6534 8.91189 10.7781C8.66858 10.9027 8.40231 10.9762 8.12951 10.9939C7.85671 11.0116 7.58318 10.9732 7.32581 10.881C7.06843 10.7889 6.83268 10.6449 6.63312 10.4581C6.43355 10.2712 6.27441 10.0455 6.16552 9.79473C6.05662 9.54398 6.00029 9.27357 6 9.0002C5.99971 9.27357 5.94337 9.54398 5.83448 9.79473C5.72559 10.0455 5.56644 10.2712 5.36688 10.4581C5.16731 10.6449 4.93157 10.7889 4.67419 10.881C4.41682 10.9732 4.14329 11.0116 3.87049 10.9939C3.59769 10.9762 3.33141 10.9027 3.08811 10.7781C2.8448 10.6534 2.62964 10.4802 2.45589 10.2692C2.28215 10.0581 2.15352 9.81368 2.07794 9.55096C2.00237 9.28824 1.98146 9.01282 2.0165 8.7417" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.99991 9.00007C2.55966 9.00005 2.13172 8.85476 1.78245 8.58675C1.43318 8.31873 1.1821 7.94296 1.06815 7.51771C0.954204 7.09246 0.983755 6.64149 1.15222 6.23475C1.32069 5.828 1.61865 5.48821 1.99991 5.26807" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.00146 2.5625C2.70757 2.63807 2.43472 2.77952 2.20358 2.97616C1.97244 3.17279 1.78908 3.41944 1.66739 3.69742C1.54569 3.97541 1.48884 4.27745 1.50116 4.58066C1.51347 4.88387 1.59462 5.1803 1.73846 5.4475" stroke={`${location.pathname==='/user/insights'?'#1E3A8A':'#4B5563'}`} strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3121_1838">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            {collapsed?'Get Insights':'Get Insights'}
          </li>
        </ul>

        <div className="sidebar-border border-t pt-[16px] mt-[16px]" />

        <div className="flex justify-between items-center mb-[10px] ml-[10px]">
          <h2 className="text-xs font-normal text-[#4B5563] leading-[20px] ml-[10px]">
            AI CONVERSATION
          </h2>
          <i className="fa-solid fa-chevron-up text-gray-500 text-[12px]"></i>
        </div>

        <ul className="sidebar-style space-y-1 ml-[15px]">
          {conversation.length > 0 &&
            conversation.map((con, i) => (
              <li
                key={`conversation-${i}`}
                className={`${con.id==chatid?'text-[#1E3A8A] font-semibold':'text-[#252F40] font-medium hover:text-[#1E3A8A]'} flex items-center pl-[10px] py-[6px] gap-[10px] text-xs leading-[20px] font-medium cursor-pointer`}
                onClick={()=>loadChat(con.id)}
              >
                <div>
                  <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.60817 11.6669C5.72151 12.238 7.00222 12.3927 8.21952 12.1031C9.43682 11.8135 10.5107 11.0986 11.2475 10.0873C11.9844 9.076 12.3358 7.83477 12.2385 6.58728C12.1412 5.3398 11.6015 4.16809 10.7167 3.2833C9.83194 2.39852 8.66023 1.85884 7.41274 1.76152C6.16526 1.6642 4.92403 2.01563 3.91273 2.7525C2.90144 3.48937 2.18657 4.5632 1.89697 5.78051C1.60736 6.99781 1.76205 8.27852 2.33317 9.39186L1.1665 12.8335L4.60817 11.6669Z" stroke={`${location.pathname==='/user/chatbot' && con.id==chatid?'#1E3A8A':'#4B5563'}`} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {collapsed?con.title.substring(0, 5):con.title}
              </li>
            ))}
        </ul>
        <div className="flex justify-center pt-2">
          <button type="button" className="w-[80%] rounded-md text-[#FFFFFF] text-xs font-normal bg-[#1E3A8A] px-2 py-1"
            onClick={()=>loadPage('/goal/create')}
          >New Goal</button>
        </div>
        <div className="bottom-border-sty"></div>
      </div>

      <div className="bg-[#F2F2F2] p-[12px] rounded-[12px] shadow-sm m-5 cursor-pointer">
        <div
          className="relative flex items-center gap-[10px]"
          ref={menuRef}
          onClick={() => setOpen(!open)}
        >
          {userData!==null && 
            <>
              <div className="rounded-full flex items-center justify-center">
                <img src={user} alt="User Icon" className="w-4 h-4" />
              </div>
              <span
                className="text-[14px] font-[400] text-[#404040] LEADING-[18PX]"            
              >
                {collapsed?userData.fname.substring(0, 1):userData.fname}
              </span>
            </>
          }

          {open && (
            <div className="absolute 
          bottom-full left-0 
          mb-2
          w-48 
          bg-white border rounded-lg shadow-lg py-2 z-50">
              {/* <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                My Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                Help
              </button> */}

              {/* <hr className="my-2" /> */}

              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 text-sm"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>    
  );
};

export default Sidebar;
