const { request } = require('express');
const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', '../VID#07/views');

app.listen(3000);

app.use((request, response, next) => {
	console.log('new request');
	console.log('host: ', request.hostname);
	console.log('path: ', request.path);
	console.log('method: ', request.method);
	console.log('I\'m still stuck here, idk what to do next...');
	next();
	//console.log('Nah, nvm, i just got nexted');
});

app.use((request, response, next) => {
	console.log('Hi, i\'m in the next middlewar');
	next();
	//console.log('Nah, nvm, i just got nexted');
});

app.get('/', (request, response) => {
	const blogs = [
		{title: 'Title1', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		{title: 'Title2', snippet: 'Lorem ipsum dolor sit amet consectetur'},
		{title: 'Title3', snippet: 'Lorem ipsum dolor sit amet consectetur'}
	];
	response.render('index', { title: 'Home', blogs});
});

app.get('/about', (request, response) => {
	response.render('about', { title: 'About' });
});

app.get('/blogs/create', (request, response) => {
	response.render('create', { title: 'Create' });
})

app.use((request, response) => {
	response.status(404).render('404', { title: '404' });
});