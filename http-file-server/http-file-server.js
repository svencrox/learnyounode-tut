"use strict";
const http = require("http");
const fs = require("fs");

const port = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer(function callback(request, response) {
    // set content type
    res.writeHead(200, { "content-type": "text/plain" });
    // create read stream for file with location given
    const src = fs.createReadStream(fileLocation);
    // pipe the stream to the response
    src.pipe(response);
});
server.listen(port);
