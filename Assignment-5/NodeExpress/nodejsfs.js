const fs = require('fs')
const path = require('path')

// console.log("Start");

// try {
//     let data = fs.readFileSync("info.txt", "utf-8")
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// fs.readFile("info.txt", "utf-8", (err, data)=>{
//     // if(err) {
//     //     console.log("Error: "+err);
//     //     return
//     // }
//     if(err) throw err
//     console.log(data);
// })

// console.log("end");

// fs.writeFile("info.text", "Add some more text", (err)=>{
//     if(err) throw err;
//     console.log("Content Written");
// })

// fs.appendFile("info.text", "\nAppend some more text", (err)=>{
//     if(err) throw err;
//     console.log("Content Written");
// })

// fs.unlink("info.text", (err)=>{
//     if(err) throw err;
//     console.log("File Dleted");
// })

// fs.readFile(path.join("test", "data.txt"), "utf-8", (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// console.log(__dirname);
// console.log(__filename);