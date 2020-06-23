/**
 * Separate your app and sever
 * The reason behind this is that it won’t listen to the port after testing.
 */
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 5000;
const server = http.createServer(app);
// pass a listener to the server to start it
server.listen(port, err => console.log(`listening http://localhost:${port}`));