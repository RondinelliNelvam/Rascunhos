const fs = require("fs");

const currPath = "./Usuarios/joe/test.txt";
const newPath = "./Usuarios/maqui/test.txt";

fs.rename(currPath, newPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully renamed the directory.");
  }
});
