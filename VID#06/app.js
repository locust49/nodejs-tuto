const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// get responses
app.get('/', (request, response) => {

	// doesnt need to specify type content (setHeader)
	// and set the status code auto
	response.send('<p>home page</p>'); 


});
