import React, { useEffect, useState } from "react";
import login from "../assets/images/login.png";
import button12 from "../assets/images/Button.png";
import { createMessage, getMessagesByConversation } from "../apis/messageApi";
import { useSearchParams } from "react-router-dom";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();
  const chatid = searchParams.get("chatid");
  console.log(chatid)

  useEffect(()=>{
    const fecthChats = async ()=>{
      if(chatid){
        await getMessages();
      }      
    }

    fecthChats();
  }, [])

  const getMessages = async()=>{
    await getMessagesByConversation(chatid)
    .then(res=>{
      setMessages(res);
    })
    .catch(err=>{

    })
  }

  const sendQuery = async () => {
    const postdata = {
      message: query
    }

    await createMessage(postdata)
    .then(res=>{
      console.log(res);
    })
    .catch((err)=>{

    })
  }

  return (
    <div className="bg-[#ffffff] p-[40px] m-[40px] h-dvh flex flex-col justify-between">
      <div className="chatbot w-[900px] bg-white p-10 text-center mx-auto">
        {/* Header */}
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-yellow-300 rounded-lg mb-4">
          <div className="star-icon">
            <img src={login} alt="Login Icon" className="w-auto" />
          </div>
        </div>

        <h1 className="text-[24px] font-[700] text-[#0A0A0A] leading-[28px] py-[10px]">
          Hi Nancy!
        </h1>
        <p className="text-[#4B5563] font-[400] mt-2 text-[14px] leading-[18px] w-2/3 mx-auto">
          I'm your Daily Advisor AI. Based on what you've shared, I'm here to
          help you track progress, stay motivated, and achieve your goals. What
          would you like to work on today?
        </p>
      </div>
      <div>
        {messages.length && messages.map((val, i)=>(
          <div key={`message_${i}`}>{val.message}</div>
        ))}
      </div>
      <form className="w-[900px] mx-auto h-[56px] ">
        <div className="form-group flex items-center gap-2 w-2/3 mx-auto border-[2px] border-[#E5F2FF] p-3 rounded-[16px] w-full h-[56px] text-[14px] leading-[18px] font-[500]">
          <input
            type="text"
            placeholder="What would you like to work on...?"
            className="message border-none py-[10px] px-[12px] w-full"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
          <button type="button" className="btn btn-submit" onClick={sendQuery}>
            <img src={button12} alt="Send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
