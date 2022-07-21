"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_controllers_1 = require("socket-controllers");
const socket_io_1 = require("socket.io");
exports.default = (httpServer) => {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
        },
    });
    socket_controllers_1.useSocketServer(io, { controllers: [__dirname + '/controllers/*.ts'] });
    return io;
};
