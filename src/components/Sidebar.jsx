import React, { useEffect, useState } from 'react'
import { getConversationList } from '../apis/conversationApi';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [conversation, setConversation] = useState([]);

  useEffect(()=>{
    const fetchConversations = async ()=>{
      await getConversations();
    }

    fetchConversations();
  }, [])

  const getConversations = async ()=>{
    await getConversationList()
    .then(res=>{
      console.log(res);
      setConversation(res);
    })
    .catch(err=>{

    })
  }

  const loadChat = (id) =>{
    navigate(`/user/chatbot?chatid=${id}`);
  }

  return (
    <div>
      <h2>Daily Advisor AI</h2>
      <h6>AI Conversation</h6>
      {conversation.length && conversation.map((val, i)=>(
        <div key={`conversation_${i}`} onClick={()=>loadChat(val.id)}>{val.title}</div>
      ))}
    </div>
  )
}

export default Sidebar