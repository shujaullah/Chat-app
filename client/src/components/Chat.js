import React, { useState } from 'react'

export default function Chat({socket, userName, room}) {
    const [currentMessage, setCurrentMessage] = useState("");

    const send_message = async()=>{
        if(currentMessage !== "")
        {
            console.log(userName)
            const messageData = {
                room: room,
                username: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    
            };

            await socket.emit("send_message", messageData);
        }
       
    }
  return (
    <div>
      <div className='chat-header'>
        <p>Live Chat</p>
      </div>
      <div className='chat-body'></div>
      <div className='chat-footer'>
        <input type="text" placeholder='Hey .....'  onChange={(event)=>{setCurrentMessage(event.target.value)}}/>
        <button onClick={send_message}>&#9658;</button>
      </div>
    </div>
  )
}
