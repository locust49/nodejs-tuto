const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews_directory, default = views');

app.listen(3000);

app.get('/', (request, response) => {
	// const blogs = [
	// 	{title: 'Title1', snippet: 'Lorem ipsum dolor sit amet consectetur'},
	// 	{title: 'Title2', snippet: 'Lorem ipsum dolor sit amet consectetur'},
	// 	{title: 'Title3', snippet: 'Lorem ipsum dolor sit amet consectetur'}
	// ];
	const blogs = [];
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