const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, response) => {
	
	//loadash
	const num = _.random(0, 24);
	console.log(num);

	const greet = _.once(() => {
		console.log('Run only once')
	});

	greet(); // will run
	greet(); // will !run

	// set header content type
	response.setHeader('Content-Type', 'text/html');

	let path = '../VID#04/views/';
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