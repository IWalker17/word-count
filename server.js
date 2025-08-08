import { dirname, normalize } from 'path';
import { fileURLToPath, parse } from 'url';
import fs from 'fs';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_DIRECTORY = __dirname;
const PORT = 3000;

const ROUTES = {
    '/': '/index.html',
    '/index.html': '/index.html',
};

// Mapping file extensions to MIME types
const mimeTypes = {
    html: 'text/html',
    js: 'text/javascript',
    css: 'text/css',
    json: 'application/json',
    png: 'image/png',
    jpg: 'image/jpeg',
    svg: 'image/svg+xml',
};

http.createServer((request, response) => {
    const requestUrl = parse(request.url);
    const pathName = ROUTES[requestUrl.pathname] ?? requestUrl.pathname;
    const fsPath = BASE_DIRECTORY + normalize(pathName);
    const ext = fsPath.split('.').pop();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Check if file exists first
    fs.stat(fsPath, (err, stats) => {
        if (err || !stats.isFile()) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 Not Found');
            return;
        }

        // Set headers BEFORE piping
        response.writeHead(200, { 'Content-Type': contentType });

        // Pipe the file stream
        const fileStream = fs.createReadStream(fsPath);
        fileStream.pipe(response);

        fileStream.on('error', (err) => {
            console.error('File stream error:', err);
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 Internal Server Error');
        });
    });
}).listen(PORT);

console.log(`☑️  Server running at http://localhost:${PORT}`);

