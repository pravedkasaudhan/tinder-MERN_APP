import React from 'react';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Chat.css';

function Chat(props) {
    const history=useHistory();
    const {name,message,profile,timestamp}=props;
  return (
    <div className='chat' onClick={()=>history.replace(`/chat/${name}`)}>
        <Avatar className='profile' src={profile}/>
        <div className='details'>
        <h2>{name}</h2>
        <p>{message}</p>
        </div>
        <p className='time'>{timestamp}</p>
    </div>
  )
}

export default Chat