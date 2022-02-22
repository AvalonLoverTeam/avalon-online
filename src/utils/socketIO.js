import {io} from 'socket.io-client';

const URL = 'http://localhost:3000'; // TODO: change it to dynamic
const socket = io(URL, {autoConnect: false});

// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });

export default socket;
