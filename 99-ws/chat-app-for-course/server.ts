import express from 'express';
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io")
const io = new Server(server);

app.use(express.static('public'));
app.use(express.json());

io.on('connection', (socket) => {
  console.log('user connection')
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
  socket.on('chat message', (msg) => {
    console.log(`message:${msg}`)
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('listening on port 3000')
})