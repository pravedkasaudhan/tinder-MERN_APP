import { Avatar } from '@material-ui/core'
import React, { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState("");
    const [chats, setChats] = useState([
        {
            name: "xyz",
            message: "hey",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9x45v-jpwOJ3OBDzvDUN20olQ5vwASkNxg&usqp=CAU"
        },
        {
            name: "xyz",
            message: "whats up?",
            profile: ""
        },
        {
            message: "i am fine"
        }
    ]);
    const sendMessage=(e)=>{
        e.preventDefault();
        setChats([...chats,{message:input}])
        setInput("");
    }
    return (
        <div>
            <div className='title'>{`hello u matched today`}</div>
            {chats.map((message) => 
                 (
                 (message.name) ? 

                        <div className='chat_message'>
                            <Avatar src={message.profile} alt="not found" />
                            <p className='message'>{message.message}</p>
                        </div>
                        :
                        <div className='user_message'>
                            <p className='user_text'>{message.message}</p>
                        </div>
                    
                    )
                
            )}
            <form className='messgae_input'>
                <input className='user_input' placeholder="enter the text message....." onChange={(e)=>setInput(e.target.value)} value={input}></input>
                <button className='send_btn' onClick={sendMessage}>SEND</button>
            </form>
                    
            
        </div>
    )
}

export default ChatScreen