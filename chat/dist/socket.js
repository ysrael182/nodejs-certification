"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class SocketIO {
    constructor(server) {
        this.io = new socket_io_1.Server(server);
        this.init();
    }
    init() {
        const self = this;
        this.io.on('connection', function (socket) {
            console.log('a user connected');
            socket.on('chatter', function (message) {
                self.sendMessage(message);
            });
        });
    }
    sendMessage(message) {
        console.log('message : ' + message);
        this.io.emit('chatter', message);
    }
}
exports.default = SocketIO;
