const fs = require("fs"); //module used to read and write file
const path = require("path");//used for creating dynamic paths of files.
try {
  // let data = fs.readFileSync("notes.txt","utf-8");
  // console.log(data);
  fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} catch (error) {
  console.error(error);
}
try {
  fs.writeFile("info.txt", "Today I am feeling sleepy...", (err) => {
    if (err) throw err;
    console.log("Content Written");
  });

  fs.appendFile("info.txt", "\nBhag DK Bose Bhag", (err) => {
    if (err) throw err;
    console.log("Content appended");
  });

  fs.unlink("delete.txt", (err) => {
    if (!err) console.log("file deleted!");
    else throw err;
  });

  fs.readFile(path.join("ES6", "main.js"),"utf-8",(err, data) =>{
    if(err) throw err;
    console.log(data);
  });

} catch (err) {
  console.error(err);
}

