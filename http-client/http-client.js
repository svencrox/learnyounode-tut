"use strict";
const http = require("http");

const url = process.argv[2];
http.get(url, function callback(res) {
    const { statusCode } = res;
    const contentType = res.headers["content-type"];

    let error;
    if (statusCode !== 200) {
        error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    }

    res.setEncoding("utf8");
    let rawData = [];
    res.on("data", (chunk) => {
        rawData.push(chunk);
    });
    res.on("end", () => {
        try {
            const parsedData = rawData;
            parsedData.forEach((data) => {
                console.log(data);
            });
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (e) => {
    console.error(`Got error: ${e.message}`);
});
