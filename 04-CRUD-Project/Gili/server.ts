console.log(`Connected!`);
//@ts-ignore
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

server.listen(3000, () => {
	console.log('listening on *:3000');
}); 

app.use(express.json());
app.use(express.static('public'));

import {router} from "./routes/squareRoutes";
app.use("/squres", router)






// console.log(window.location.search.substr(1))
