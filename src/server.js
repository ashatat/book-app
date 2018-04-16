const http = require('http');
const router = require('./router');

const port = process.env.PORT || 3000;
const host = process.env.HOSTNAME || 'localhost';
const server = http.createServer(router);

server.listen(port, () => {
  console.log(`the site is up on http://${host}:${port} enjoy :)`);
});