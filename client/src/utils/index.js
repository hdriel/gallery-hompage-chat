import socketIOClient from "socket.io-client";
import {ENDPOINT} from "./consts";

let socket = null;
export const getSocket = function (reconnect = true){
    if(!socket){
        socket = socketIOClient(ENDPOINT);
    }
    return socket;
};

export const closeSocket = function (){
    if(socket){
        socket.close();
    }
};
