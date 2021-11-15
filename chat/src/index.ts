import express from "express";
import path  from "path";
import routes from "./router";


const app = express();
const PORT = 3000;

app.set("views", path.join(process.cwd(), "views"));
app.set('view engine', 'pug');


app.use("/", routes);


const server = express()
    .use(app)
    .listen(PORT, () => { console.log(`Server started at port ${PORT}`);  });



const io = require('socket.io')(server);

io.on('connection', function(socket: any) {
    console.log('a user connected');
    socket.on('chatter', function(message: string) {
        console.log('message : ' + message);
        io.emit('chatter', message);
    });
});