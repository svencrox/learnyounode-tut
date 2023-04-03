"use strict";
const http = require("http");

const urls = [process.argv[2], process.argv[3], process.argv[4]];

Promise.all(
    urls.map((url) => {
        return new Promise((resolve, reject) => {
            http.get(url, (response) => {
                let rawData = "";
                response.on("data", (chunk) => {
                    rawData += chunk;
                });
                response.on("end", () => {
                    const result = rawData.toString();
                    resolve(result);
                });
            }).on("error", (error) => {
                reject(error);
            });
        });
    })
)
    .then((data) => {
        const concatenatedData = data.reduce((accumulator, currentValue) => {
            return accumulator + "\n" + currentValue;
        });
        console.log(concatenatedData);
    })
    .catch((error) => {
        console.error("Error retrieving data from URLs:");
        console.error(error);
    });

///////////////////////////////////// answer provided:
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
