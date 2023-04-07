"use strict";
const http = require("http");
const port = process.argv[2];

const server = http.createServer(function callback(request, response) {
    if (request.method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => {
            const transformed = body.toUpperCase();
            response.write(transformed);
            response.end();
        });
    } else {
        // Handle other HTTP methods, set it to 405 method not allowed
        res.statusCode = 405;
        res.setHeader("Allow", "POST");
        res.end();
    }
});
server.listen(port);
