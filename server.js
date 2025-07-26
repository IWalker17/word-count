import fs from 'fs';
import http from 'http';
import { normalize, dirname} from 'path';
import { parse, fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDirectory = __dirname;
const port = 3000;

http.createServer(function (request, response) {

     try {
          const requestUrl = parse(request.url);
          const fsPath = baseDirectory+normalize(requestUrl.pathname);
          const fileStream = fs.createReadStream(fsPath);

          fileStream.pipe(response);

          try {
               fileStream.on('open', function() {
                    response.writeHead(200);
               })
          } catch(e) {
               fileStream.on('error',function(e) {
                    response.writeHead(404);
                    response.end();
               })
          }

     } catch(e) {
          response.writeHead(500);
          response.end();
          console.log(e.stack);
     }
}).listen(port)

console.log(`listening on port: ${port} \nOpen URL:\nlocalhost:3000/index.html`);
