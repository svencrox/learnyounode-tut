const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function (err, files) {
  if (err) {
    return console.error("Error:", err);
  }

  files.forEach(function (file) {
    console.log(file);
  });
});
