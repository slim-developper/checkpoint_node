var http = require('http');

var inputUrl = process.argv[2];

http.get(inputUrl, function(response) {
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.on('data', console.log);
});