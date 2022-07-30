import React, { useState } from 'react'

export default function RoomsToJoin() {

    function joinRoom(){
        console.log ('join');
    }
  

  return (
    <div>
        <button onClick={joinRoom}>join</button>
    </div>
  )
}
