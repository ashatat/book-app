const handler = require('./handler');

const router = (req, res) => {
  const { url } = req;
  if (url==='/') {
    handler.servePublic('/index.html', res);
  } 
}

module.exports = router;