const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on port', port);
});