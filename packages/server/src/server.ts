import app from './app';
import config from './config/config';
import http from 'node:http';

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
