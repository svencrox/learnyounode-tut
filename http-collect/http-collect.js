"use strict";
const http = require("http");

const url = process.argv[2];
http.get(url, function callback(res) {
    const { statusCode } = res;
    let resCount = 0;
    // resCount = res.length;
    let error;
    if (statusCode !== 200) {
        error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
    }

    res.setEncoding("utf8");
    let rawData = [];
    let charCount = 0;
    res.on("data", (chunk) => {
        rawData += chunk;
        charCount += chunk.length;
    });
    res.on("end", () => {
        try {
            console.log(charCount);
            const parsedData = rawData;
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (e) => {
    console.error(`Got error: ${e.message}`);
});
