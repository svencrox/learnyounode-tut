"use strict";
const net = require("net");
const port = process.argv[2];

const server = net.createServer(function listener(socket) {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${addZero(
        date.getMonth() + 1
    )}-${addZero(date.getDay() + 2)} ${date.getHours()}:${date.getMinutes()}\n`;
    socket.end(formattedDate);
});

function addZero(number) {
    return number < 10 ? `0${number}` : num;
}

server.listen(port);
