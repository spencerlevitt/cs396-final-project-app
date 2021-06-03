import { io } from "socket.io-client";
import { v4 as uuid } from 'uuid';

const id = uuid().toString();
const socket = io("http://localhost:3000");
socket.emit("login", id);

export default socket;