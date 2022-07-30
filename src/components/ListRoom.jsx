import React, { useState, useEffect } from 'react'
import socket from '../utils/socketIO'

export default function ListRoom() {
    const [roomsList, setRoomsList]= useState([]);
    useEffect(()=>{
      socket.on('getRoomList',(rooms)=>{
        console.log('roomList')
        console.log(rooms)
        setRoomsList(rooms);
      })

      return ()=>{
        socket.off('getRoomList');
      }
    }, [])

  return (
    <div>
        {roomsList.map((room)=>{
            return(
              <button>join {room.name}</button>
            )
        })}
    </div>
  )
}
