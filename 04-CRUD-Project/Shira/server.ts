const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   console.log('A user connected');
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});


server.listen(3000)

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){ res.sendFile('public/dist/index.html');
// });

// //Whenever someone connects this gets executed
// io.on('connection', function(socket){
//    console.log('A user connected');
   
//    //Whenever someone disconnects this piece of code executed
//    socket.on('disconnect', function () {
//       console.log('A user disconnected');
//    });
// });
// http.listen(3000, function(){
//    console.log('listening on *:3000');
// });






// const boxArr = [
//   {
//     id:'box1',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box2',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box3',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box4',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box5',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box6',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box7',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box8',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   },
//   {
//     id:'box9',
// 		isCubeFull: 0,
// 		isFullX: 0,
//   }
// ]

// app.get("/api/get-boxes", (req, res) => {
//     try {
//       res.send({ boxArr });
//     } catch (error) {
//       res.send({ error: error.message });
//     }
//   });


// console.log(window.location.search.substr(1))
