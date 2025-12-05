import React, { useEffect, useRef, useState } from "react";
import login from "../assets/images/login.png";
import button12 from "../assets/images/Button.png";
import { createMessage, getMessagesByConversation } from "../apis/messageApi";
import { useSearchParams } from "react-router-dom";
import chatbotmessage from "../assets/images/chatbotmessage.png";
import user from "../assets/images/user.png";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/slices/loaderSlice";
import sendGif from "../assets/gifs/send_gif.gif";
import Swal from "sweetalert2";

const Chatbot = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [searchParams] = useSearchParams();
  const chatid = searchParams.get("chatid");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    dispatch(showLoader());
    const fecthChats = async () => {
      if (chatid) {
        await getMessages();
      }
    };

    fecthChats();
  }, [chatid]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getMessages = async () => {    
    await getMessagesByConversation(chatid)
      .then((res) => {
        console.log(res);
        setMessages(res);
      })
      .catch((err) => {})
      .finally(() => {
        setFetched(true);
        dispatch(hideLoader());
      });
  };

  const sendQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    const postdata = {
      conversation_id: parseInt(chatid),
      query: query,
    };

    await createMessage(postdata)
      .then((res) => {
        console.log(res);
        res.data.forEach((val)=>{
          setMessages((prevMessages) => [...prevMessages, val]);
        });
        setQuery("");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err?.response?.data?.llmResponse?.message || err.response?.data?.message || err?.message || "Something went wrong!!",
          text: '',
          confirmButtonColor: "#3085d6",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {fetched && (
        <div className="bg-[#F5F7FA] pt-6 pb-2 px-4 h-full flex flex-col overflow-hidden">
          {messages.length === 0 && (
            <div className="chatbot w-full xl:w-[900px] bg-white text-center mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-yellow-300 rounded-lg mb-4">
                <img src={login} alt="Login Icon" />
              </div>

              <h1 className="text-[20px] lg:text-[24px] font-[700] text-[#0A0A0A] leading-[28px] py-2">
                Hi Nancy!
              </h1>

              <p className="text-[#4B5563] font-[400] mt-2 text-[14px] leading-[18px] w-full lg:w-2/3 mx-auto">
                I'm your Daily Advisor AI. What would you like to work on today?
              </p>
            </div>
          )}

          <div className="flex justify-center overflow-y-auto hide_scrollbar px-4 mt-6">
            {messages.length > 0 && (
              <div className="w-full space-y-8 max-w-[800px]">
                {messages.map((val, i) => (
                  <div key={i}>
                    {val.message_type === "aireply" ? (
                      <div className="flex w-full items-start gap-2 max-w-[85%]">
                        <img
                          src={chatbotmessage}
                          alt="AI"
                          className="w-4 h-4"
                        />

                        <div className="bg-white p-4 shadow-sm rounded-lg">
                          <p className="text-[14px] text-[#0A0A0A] break-words">
                            {val.message}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end items-start gap-2">
                        <div className="bg-[#EAF2FF] p-3 rounded-lg max-w-[85%]">
                          <p className="text-[14px] text-[#0A0A0A] break-words">
                            {val.message}
                          </p>
                        </div>
                        <img
                          src={user}
                          alt="You"
                          className="w-[30px] h-[30px]"
                        />                        
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef}></div>
              </div>
            )}            
          </div>

          {/* 🟦 INPUT BOX — FIXED AT BOTTOM */}
          <div className="w-full shrink-0 pt-4 pb-8">
            <form className="w-full max-w-[800px] mx-auto" onSubmit={(e)=>sendQuery(e)}>
              <div className="w-full flex items-center gap-3 border-2 bg-[#FFFFFF] border-[#E5F2FF] p-3 rounded-[16px] h-[56px]">
                <input
                  type="text"
                  placeholder="What would you like to work on...?"
                  className="flex-1 outline-none text-[14px]"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                {!loading && <button type="button" onClick={(e)=>sendQuery(e)}>
                  <img src={button12} alt="Send" />                  
                </button>}
                {loading && <img
                  src={sendGif}
                  alt="Send Gif"
                  className="w-8 h-8 object-contain"
                />}
              </div>
            </form>
          </div>
        </div>
      )}      
    </>
  );
};

export default Chatbot;
