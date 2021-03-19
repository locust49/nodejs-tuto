const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://souad:test1234@Cluster0.i5ehu.mongodb.net/db_tuto?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(result => console.log('connected to db'))
	.catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

app.listen(3000);

//middleware & static files
app.use(express.static('public'));
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