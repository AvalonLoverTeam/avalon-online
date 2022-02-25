import { io } from "socket.io-client";

const URL = "http://localhost:8000"; // TODO: change it to dynamic
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  // TODO: change it to dev only
  console.log(event, args);
});

export default socket;
