const fs = require('fs');
const path = require('path');
// const queries = require('./queries/query');

const contentType = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'images/jpg',
  ico: 'images/ico',
  js: 'text/javascript'
}

const servePublic = (endpoint, res) => {
  const filePath = path.join(__dirname, '..', 'public', endpoint);
  const fileExtention = endpoint.split('.')[1];
  res.writeHead(200, { 'Content-Type': `${contentType[fileExtention]}` });
  fs.readFile(filePath, (error, file) => {
    if (error) {
      throw new Error(error);
    } else {
      res.end(file);
    }
  });
}

module.exports = {servePublic};