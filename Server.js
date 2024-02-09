const http = require('http');
const app = require('./App');

const port = 5000;
const server = http.createServer(app);
server.listen(port);
