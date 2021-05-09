const socket = require("socket.io");
const { EVENTS } = require('../utils/consts');

// Socket setup
module.exports = function messageSocketServer(server){
    const io = socket(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });

    const activeUsers = new Set();

    io.on("connection", function (socket) {
        console.log("Made socket connection");

        socket.on(EVENTS.CONNECTING, function (data) {
            socket.userId = data;
            activeUsers.add(data);
            io.emit(EVENTS.CONNECTING, [...activeUsers]);
        });

        socket.on(EVENTS.DISCONNECTING, () => {
            activeUsers.delete(socket.userId);
            io.emit("user disconnected", socket.userId);
        });

        socket.on(EVENTS.SEND_MESSAGE, function (data) {
            console.log("CHAT-MESSAGE: ", data);
            io.emit(EVENTS.SEND_MESSAGE, data);
        });

        socket.on(EVENTS.TYPING, function (data) {
            console.log("TYPING: ", data);
            socket.broadcast.emit(EVENTS.TYPING, data);
        });
    });
}
