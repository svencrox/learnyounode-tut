const fs = require("fs");
const path = require("path");
fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;

  const filteredFiles = files.filter(function (file) {
    return path.extname(file) === "." + process.argv[3];
  });
  console.log(filteredFiles.join("\n"));
});
