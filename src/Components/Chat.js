import React,{useContext} from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <i class="fa-sharp fa-solid fa-video"></i>
        <i class="fa-regular fa-user-plus"></i>
        <i class="fa-solid fa-ellipsis"></i>
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat