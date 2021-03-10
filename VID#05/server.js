const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
	// request is a huuuge object, let's log some of its attributes..
	console.log(request.url, request.method);

	// set header content type
	response.setHeader('Content-Type', 'text/html');

	let path = './views/';
	switch(request.url)
	{
		case '/':
			path += 'index.html';
			response.statusCode = 200;
			break;
		case '/index':
			path += 'index.html';
			response.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			response.statusCode = 200;
			break;
		case '/about-us':
			response.statusCode = 301; // moved == redirection
			response.setHeader('Location', '/about');
			response.end();
			break;
		default :
			path += '404.html';
			response.statusCode = 404;
			break;
	}

	//send an html file
	fs.readFile(path, (err, data) => {
		if (err)
			console.log(err);
		else
			response.write(data);
		response.end(); // or response.end(data) if we only got 'data'
	});
});

server.listen(3000, 'localhost', () =>{
	console.log('Listening for request on port 3k');
});