const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

setTimeout(() => {
  server.close(() => {
    console.log('Server closed');
  });
}, 5000); // Close the server after 5 seconds