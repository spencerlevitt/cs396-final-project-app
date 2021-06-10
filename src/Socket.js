import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";

const id = uuid().toString();
const socket = io("http://cs396-final-project.herokuapp.com");
socket.emit("login", id);

export default socket;
