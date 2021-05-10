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
        console.log("Made socket connection ", socket.id);

        socket.on(EVENTS.CONNECTING, function ({prevUsername = '', username}, callbackFn) {
            if(activeUsers.has(username)){
                console.log(`'${username}' already exists`);
                callbackFn(false)
            }
            else {
                socket.userId = username;
                activeUsers.delete(prevUsername);
                activeUsers.add(username);
                callbackFn(true);
                console.log(`'${socket.userId}' joined`);
                io.emit(EVENTS.CONNECTED_USERS, [...activeUsers]);
            }
        });

        socket.on(EVENTS.DISCONNECTING, () => {
            activeUsers.delete(socket.userId);
            console.log(`'${socket.userId}' left`);
            io.emit(EVENTS.CONNECTED_USERS, [...activeUsers]);
        });

        socket.on(EVENTS.SEND_MESSAGE, function (data) {
            const { message, username, imageId } = data;
            console.log(`[${imageId}] '${username}' send: ${message}`);

            io.emit(EVENTS.SEND_MESSAGE, {
                date: Date.now(),
                message,
                username,
                imageId,
            });
        });
    });
}
