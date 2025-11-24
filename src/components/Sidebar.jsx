import React, { useEffect, useState } from "react";
import { getConversationList } from "../apis/conversationApi";
import { useNavigate } from "react-router-dom";
import user from "../assets/images/user.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      await getConversations();
    };

    fetchConversations();
  }, []);

  const getConversations = async () => {
    await getConversationList()
      .then((res) => {
        console.log(res);
        if (res.isArray()) {
          setConversation(res);
        }
      })
      .catch((err) => {});
  };

  const loadChat = (id) => {
    navigate(`/user/chatbot?chatid=${id}`);
  };

  return (
    <div className="w-full flex flex-col justify-between h-screen w-[280px] border-r bg-white p-[20px] gap-[20px]">
      {/* ------------------- TOP SECTION ------------------- */}
      <div>
        {/* Logo / Title */}
        <h1 className="text-[20px] leading-[24px] font-[500] text-[#1E3A8A] mb-[20px] align-center">
          Daily Advisor AI
        </h1>

        {/* Quick Actions */}
        <h2 className="text-[16px] font-[700] text-[#4B5563] leading-[20px] mb-[10px]">
          Quick Actions
        </h2>

        <ul className="sidebar-style space-y-3 ml-[10px]">
          <li className="flex items-center gap-[10px] text-[14px] font-[500] leading-[18px] text-[#252F40] cursor-pointer hover:text-[#1E3A8A] active:text-[#252F40] py-[10px]">
            <div className="w-[10%] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            Dashboard
          </li>

          <li className="flex items-center gap-[10px] text-[14px] leading-[20px] font-[500] text-[#252F40] cursor-pointer hover:text-[#1E3A8A] active:text-[#252F40]">
            <div className="w-[10%] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            Daily Check-in
          </li>

          <li className="flex items-center gap-[10px] text-[14px] leading-[20px] font-[500] text-[#252F40] cursor-pointer hover:text-[#1E3A8A] active:text-[#252F40] py-[10px]">
            <div className="w-[10%] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                />
              </svg>
            </div>
            Goal Review
          </li>

          <li className="flex items-center gap-[10px] text-[14px] leading-[20px] font-[500] text-[#252F40] cursor-pointer hover:text-[#1E3A8A] ">
            <div className="w-[10%] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            Get Insights
          </li>
        </ul>

        {/* Line Divider */}
        <div className=" sidebar-border border-t pt-[16px] mt-[16px]" />

        {/* AI Conversation */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[16px] font-[700] text-[#4B5563] leading-[20px] mb-[10px] ">
            AI Conversation
          </h2>
          <i className="fa-solid fa-chevron-up text-gray-500 text-[12px]"></i>
        </div>

        {/* Conversation Items */}
        <ul className="sidebar-style space-y-3 ml-[10px]">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className="flex items-center py-[10px] gap-[10px] text-[14px] leading-[20px] font-[500] text-[#252F40] cursor-pointer hover:text-[#1E3A8A] active:text-[#252F40]"
            >
              <div className="w-[10%] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </div>
              Goal Setting for Q1 2025
            </li>
          ))}
        </ul>
        <div className="bottom-border-sty"></div>
      </div>

      {/* ------------------- BOTTOM USER BOX ------------------- */}
      <div className="bg-[#F2F2F2] p-[12px] rounded-[12px] flex items-center gap-[10px] shadow-sm mt-5">
        <div className="rounded-full flex items-center justify-center">
          <img src={user} alt="User Icon" className="w-4 h-4" />
        </div>
        <span className="text-[14px] font-[400] text-[#404040] LEADING-[18PX]">
          Nancy
        </span>
      </div>
    </div>
    // <div>
    //   <h2>Daily Advisor AI</h2>
    //   <h6>AI Conversation</h6>
    //   {conversation.length>0 && conversation.map((val, i)=>(
    //     <div key={`conversation_${i}`} onClick={()=>loadChat(val.id)}>{val.title}</div>
    //   ))}
    // </div>
  );
};

export default Sidebar;
