const { request, response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://souad:test1234@Cluster0.i5ehu.mongodb.net/db_tuto?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(result => app.listen(3000))
	.catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');



//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})) // takes the encoded data and parses that into an object
app.use(morgan('dev'));

// app.get('/add-blog', (request, response) => {
// 	const blog = new Blog({
// 		title: 'new blog',
// 		snippet: 'about my new blog',
// 		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// 	});

// 	blog.save()
// 		.then(result => response.send(result))
// 		.catch(error => console.log(error));
// });

// app.get('/all-blogs', (request, response) => {
// 	Blog.find()
// 		.then(result => response.send(result))
// 		.catch(error => console.log(error));
// });

// app.get('/single-blog', (request, response) => {
// 	Blog.findById('605b8420db01e2032644c15a')
// 	.then(result => response.send(result))
// 	.catch(error => console.log(error));
// });

app.post('/blogs', (request, response) => {
	const blog = new Blog(request.body);

	blog.save()
		.then(result => response.redirect('/blogs'))
		.catch(error => console.log(error));
});

app.get('/blogs', (request, response) => {
	Blog.find().sort({createdAt: -1})
		.then(result => {
			response.render('index', { title: 'All Blogs', blogs: result})
		})
		.catch(error => console.log(error));
});

app.get('/', (request, response) => {
	response.redirect('/blogs');
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