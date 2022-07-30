import React, { useState } from 'react'
import socket from '../utils/socketIO';
import ListRoom from './ListRoom';

export default function AuthorizedApp() {

    const [roomName, setRoomName]= useState('');
    const hasInvalidName = roomName.length <1 || roomName.length >10;
    
    function createRoom(){
        socket.emit('createRoom', roomName);
        setRoomName('');
    }



  return (
    <div>
        <input onChange={(e)=>setRoomName(e.target.value)} type="text" placeholder='room name' />
        <button onClick={createRoom} disabled={hasInvalidName}>Create room</button>
        <ListRoom/>
    </div>
  )
}
