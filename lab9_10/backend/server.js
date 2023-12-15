const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath;
  if (req.url === '/') {
    filePath = path.join(__dirname, '../frontend/template/index.html');

    anserwServer(filePath, res)

  } else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    anserwServer(filePath=null, res)
    
    req.on('end', () => {
      console.log('Полученные данные:', body);

    });

  } else {
    filePath = path.join(__dirname, '../frontend/static', req.url);
    anserwServer(filePath, res)
  }
});


function anserwServer(filePath = null, res){
  
  if(filePath !== null) {

    let contentType = getContentType(filePath);
  
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': contentType });
          res.end('<h1>404 Not Found</h1>');
        } else {
          res.writeHead(500, { 'Content-Type': contentType });
          res.end('<h1>500 Internal Server Error</h1>');
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });

  } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('регистрация прошла успешно');
    }
}

function getContentType(filePath) {
  let extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
}



const PORT = 3000;
server.listen(PORT, () => {
  console.log('http://127.0.0.1:3000');
});
