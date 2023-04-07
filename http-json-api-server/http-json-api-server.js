"use strict";
const http = require("http");
const url = require("url");
const port = process.argv[2];

const server = http.createServer(function callback(req, res) {
    const { pathname, query } = url.parse(req.url, true);

    if (req.method === "GET" && pathname === "/api/parsetime" && query.iso) {
        const iso = new Date(query.iso);
        const responseObj = {
            hour: iso.getHours(),
            minute: iso.getMinutes(),
            second: iso.getSeconds(),
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(responseObj));
    } else if (
        req.method === "GET" &&
        pathname === "/api/unixtime" &&
        query.iso
    ) {
        const unixtime = new Date(query.iso).getTime();
        const responseObj = { unixtime };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(responseObj));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(port);
