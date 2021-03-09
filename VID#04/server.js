const http = require('http');

const server = http.createServer((request, response) => {
	// request is a huuuge object, let's log some of its attributes..
	console.log(request.url, request.method);

	// set header content type
		// response.setHeader('Content-Type', 'text/plain');
		// response.write('Salam =) ');
	response.setHeader('Content-Type', 'text/html');
	response.write('<head><link rel="stylesheet" href="#"')
	response.write('<p>Salaaam al3alam</p>')
	response.write('<p>Salaaam again al3alam</p>')
	response.end();
});

server.listen(3000, 'localhost', () =>{
	console.log('Listening for request on port 3k');
});