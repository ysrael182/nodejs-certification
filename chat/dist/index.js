"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set("views", path_1.default.join(process.cwd(), "views"));
app.set('view engine', 'pug');
app.use("/", router_1.default);
const server = (0, express_1.default)()
    .use(app)
    .listen(PORT, () => { console.log(`Server started at port ${PORT}`); });
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chatter', function (message) {
        console.log('message : ' + message);
        io.emit('chatter', message);
    });
});
