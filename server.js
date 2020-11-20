/**
 * The content of this file came from the following link:
 * https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
 * 
 * Using this as a temporary solution to address a potential security vulnerability from http-server
 * and have removed http-server as a dependancy. 
 */
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const baseDirectory = __dirname   // or whatever base directory you want

const port = 3000

http.createServer(function (request, response) {
    try {
        const requestUrl = url.parse(request.url)

        // need to use path.normalize so people can't access directories underneath baseDirectory
        const fsPath = baseDirectory+path.normalize(requestUrl.pathname)

        const fileStream = fs.createReadStream(fsPath)
        fileStream.pipe(response)
        fileStream.on('open', function() {
             response.writeHead(200)
        })
        fileStream.on('error',function(e) {
             response.writeHead(404)     // assume the file doesn't exist
             response.end()
        })
   } catch(e) {
        response.writeHead(500)
        response.end()     // end the response so browsers don't hang
        console.log(e.stack)
   }
}).listen(port)

console.log(`listening on port: ${port} \nOpen URL:\nlocalhost:3000/index.html`);