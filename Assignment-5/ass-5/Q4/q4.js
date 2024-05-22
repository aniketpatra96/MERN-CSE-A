//21BCSE30 | ANIKET PATRA
const http = require('http');
const fs = require('fs');
const path = require('path');

const htmlDirectory = path.join(__dirname, 'html_files');

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(htmlDirectory, url);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        } else {
          const contentType = getContentType(filePath);
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    }
  });
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
}

// Define the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
