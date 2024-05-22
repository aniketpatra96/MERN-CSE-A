const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let url = req.url;

  // console.log(url)
  // res.setHeader('Content-Type','text/html')
  // // res.write('Hello from Node JS server')
  // if(url === '/'){
  //     res.write('<h1>Home Page</h1>')
  // }else if(url === '/about'){
  //     res.write('<h1>About Us Page</h1>')
  // }else{
  //     res.write('<h1>404 not found</h1>')
  // }
  try {
    if (url === "/") {
      fs.readFile("public/index.html", "utf-8", (err, data) => {
        if (err) throw err;
          res.setHeader("Content-Type", "text/html");

        res.write(data);
        res.end();
      });
    } else if (url === "/about") {
      fs.readFile("public/about.html", "utf-8", (err, data) => {
        if (err) throw err;
          res.setHeader("Content-Type", "text/html");

        res.write(data);
        res.end();
      });
    } else if (url === "/contact") {
      fs.readFile("public/contact.json", "utf-8", (err, data) => {
        if (err) throw err;
          res.setHeader("Content-Type", "application/json");

        res.write(data);
        res.end();
      });
    } else {
      res.write("<h1>404 not found</h1>");
      res.end();
    }
  } catch (err) {
    console.log(err);
  }
});

server.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
