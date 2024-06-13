// Create web server
// Create a web server that listens on port 3000 and returns 'Hello World' to the user when the route is '/'. The server should return a 404 status code for any other routes.

// Expected Output
// When you navigate to 'http://localhost:3000/' in your browser, you should see the text 'Hello World' on the screen.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// When you navigate to 'http://localhost:3000/' in your browser, you should see the text 'Hello World' on the screen.