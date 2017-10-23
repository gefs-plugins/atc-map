'use strict';

const Promise = require('bluebird');

const http = require('http');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const mime = require('mime');

http.createServer((request, response) => {
	let filePath;
	if (request.url === '/') filePath = 'source/map.html';
	else filePath = request.url;

	validate(response, `./${filePath}`);
}).listen(8080);

function validate (response, absPath) {
	fs.exists(absPath, exists => {
    	if (exists) {
    		fs.readFileAsync(absPath).then(data => {
    			sendPage(response, absPath, data);
    		});
    	} else send404(response);
    });
}

function send404 (response) {
	response.writeHead(404, { "Content-type": "text/html" });
	response.end("<h1>Error 404: Not Found</h1>");
}

function sendPage (response, filePath, fileContents) {
	response.writeHead(200, { "Content-type": mime.getType(path.basename(filePath)) });
	response.end(fileContents);
}

console.log("Please go to http://127.0.0.1:8080");
