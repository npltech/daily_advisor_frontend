import React, { useEffect, useState } from "react";
import login from "../assets/images/login.png";
import button12 from "../assets/images/Button.png";
import { createMessage, getMessagesByConversation } from "../apis/messageApi";
import { useSearchParams } from "react-router-dom";
import chatbotmessage from "../assets/images/chatbotmessage.png";
import user from "../assets/images/user.png";

const Chatbot1 = () => {
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
    <>
      <div className="bg-[#ffffff] p-[10px] xl:p-[40px] my-[10px] xl:my-[40px] h-dvh flex flex-col justify-between">
        <div className="chatbot w-full xl:w-[900px] bg-white text-center mx-auto">
          
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-yellow-300 rounded-lg mb-4">
            <div className="star-icon">
              <img src={login} alt="Login Icon" className="w-auto" />
            </div>
          </div>
  
          <h1 className="text-[20px] lg:text-[24px] font-[700] text-[#0A0A0A] leading-[24px] lg:leading-[28px] py-[10px]">
            Hi Nancy!
          </h1>
          <p className="text-[#4B5563] font-[400] mt-2 text-[14px] leading-[18px] w-full lg:w-2/3 mx-auto">
            I'm your Daily Advisor AI. Based on what you've shared, I'm here to
            help you track progress, stay motivated, and achieve your goals. What
            would you like to work on today?
          </p>
        </div>
        <div>
          {messages.length>0 && messages.map((val, i)=>(
            <div key={`message_${i}`}>{val.message}</div>
          ))}
        </div>
        <section className="message-box1 w-full bg-[#ffffff] py-10 px-4 flex justify-center mt-[40px] overflow-y-[auto]">
          <div className=" w-full space-y-8">
            <div className="flex w-full items-start gap-[8px]">
                <img src={chatbotmessage} alt="Chatmessage Icon" className="w-4 h-4" />
    
              
              <div className="w-full lg:w-[80%] message-box bg-[#ffffff] border-[2px] border-[#E4E4E4] p-[24px] shadow-sm max-w-xl">
                <p className="text-[#0A0A0A] font-400 text-[14px] leading-[18px]">
                  Thanks — I’ve got enough to build a clear, actionable plan. I’ll propose a 90-day objective, strategic pillars, weekly actions, KPIs, quick wins, and recommended experiments. Ready?
                </p>
              </div>
            </div>

                <div className="flex justify-end align-baseline gap-[8px]">
                  <div className="user-content">
                <p className="text-[#0A0A0A] font-400 text-[14px] leading-[18px]">
                  Yes
                </p>
                </div>
                <img src={user} alt="User Icon" className="w-[30px] h-[30px]" />
                
              </div>


            <div className="flex items-start gap-[8px] my-[60px]">
              <img src={chatbotmessage} alt="Chatmessage Icon" className="w-4 h-4" />
              <div className="message-box w-full lg:w-[80%] bg-white border-[2px] border-[#E4E4E4] p-[24px] shadow-md max-w-xl">
                <p className="text-[#0A0A0A] font-[400] text-[14px] leading-[18px]mb-3">Here’s a focused plan to increase sales over the next 90 days, given your resources (small marketing team, limited budget).</p>
                <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                  <div>
                    <p className="text-[#0A0A0A] font-400 text-[14px] leading-[18px]">1) 90-Day Objective</p>
                    <p className="para text-[#0A0A0A] font-400 text-[14px] leading-[18px]">
                      Increase monthly revenue by 20% through stronger ads, CRO improvements,
                      and higher repeat purchases. 
                                        
                    </p>
                  </div>
                  <div>
                  <p className="text-[#0A0A0A] font-400 text-[14px] leading-[18px]">2) Strategic Pillars(3)</p>
                    <ul className="list-disc pl-5 text-[#0A0A0A] font-400 text-[14px] leading-[18px]">
                      <li>Optimize Paid Performance: Lower CAC and increase ROAS by improving targeting and creatives.</li>
                      <li>Conversion Rate Optimization (CRO): Improve product pages, checkout flow, and top-10 SKU funnels.</li>
                      <li>Retention & Repeat Purchases: Launch simple email flows and one-post-purchase offer to boost LTV.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <form className="w-full xl:w-[900px] mx-auto">
          <div className="form-group flex items-center gap-2 w-2/3 mx-auto border-[2px] border-[#E5F2FF] p-3 rounded-[16px] w-full h-[56px] text-[14px] leading-[18px] font-[500] mb-[20px]">
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
    </>
  )
}

export default Chatbot1