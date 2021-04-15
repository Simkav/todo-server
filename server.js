const http = require('http');
const app = require('./app');
require('dotenv').config();
const { TODO_SERVER_PORT: PORT } = require('./config/index');

const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT);
  console.log('Server started');
};

startServer();
