const handler = require('./handler');

//generate list of files paths inside the public folder
let filesInFolder = [];
function getFiles(root) {
  fs.readdirSync(root).forEach((file) => {
    if (!fs.statSync(root + '/' + file).isDirectory()) {
      filesInFolder.push(root.replace('./public', '') + '/' + file);
    } else getFiles(root + '/' + file);
  });
}
getFiles('./public')

const router = (req, res) => {
  const { url } = req;
  if (url==='/') {
    handler.servePublic('/index.html', res);
  } else if (filesInFolder.includes(url)) {
    handler.servePublic(url, res)
  }
}

module.exports = router;