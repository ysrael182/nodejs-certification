import express from "express";
import path  from "path";
import routes from "./router";
import SocketIO from "./socket";

const app = express();
const PORT = 3000;

app.set("views", path.join(process.cwd(), "views"));
app.set('view engine', 'pug');


app.use("/", routes);


const server = express()
    .use(app)
    .listen(PORT, () => { console.log(`Server started at port ${PORT}`);  });

new SocketIO(server);


process.on('SIGTERM', () => {
    process.exit();
});