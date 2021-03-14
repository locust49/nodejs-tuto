const { request } = require('express');
const express = require('express');
const morgan = require('morgan');

const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', '../VID#07/views');

app.listen(3000);

app.use(morgan('dev'));

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