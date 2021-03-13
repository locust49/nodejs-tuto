const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// get responses

app.get('/', (request, response) => {
	
	// doesnt need to specify type content (setHeader)
	// and set the status code auto
		//response.send('<p>home page</p>'); 
		// we should specify the path of the root where the files are located.
	response.sendFile('./views/index.html', { root: __dirname + '/../VID#04/' });
});

app.get('/about', (request, response) => {
	response.sendFile('./views/about.html', { root: __dirname + '/../VID#04/' });
});

app.get('/about-us', (request, response) => {
	response.redirect('/about');
});

// fire for every url other than the one above

app.use((request, response) => {
	response.status(404).sendFile('./views/404.html', { root: __dirname + '/../VID#04/'});
});