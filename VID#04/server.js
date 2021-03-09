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
			break;
		case '/index':
			path += 'index.html';
			break;
		case '/about':
			path += 'about.html';
			break;
		default :
			path += '404.html';
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