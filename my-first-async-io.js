const fs = require("fs");
fs.readFile(process.argv[2], (err, data) => {
  let str = data.toString();
  str = str.split("\n");
  console.log(str.length - 1);
  if (err) throw err;
});
