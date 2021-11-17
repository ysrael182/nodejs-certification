import { Server } from "socket.io";
import util  from "util";

export default class SocketIO {

    private io: Server;

    constructor(server: any) {
        this.io = new Server(server);
        this.init();
    }

    private init() {
        const self = this;
        this.io.on('connection', function(socket: any) {
            console.log('a user connected');
            socket.on('chatter', function(message: string) {
                self.sendMessage(message);
            });
        });
    }

    private sendMessage(message: string) {
        console.log('message : ' + message);
        this.io.emit('chatter', message);
    }
}