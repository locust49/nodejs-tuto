const express = require('express');
const router = express.Router();

const Blog = require('../models/blog');

router.post('/', (request, response) => {
	const blog = new Blog(request.body);

	blog.save()
		.then(result => response.redirect('/blogs'))
		.catch(error => console.log(error));
});

router.get('/create', (request, response) => {
	response.render('create', { title: 'Create' });
})

router.delete('/:id', (request, response) => {
	const id = request.params.id;
	Blog.findByIdAndDelete(id)
		.then(result => response.json({ redirect: '/blogs'}))
		.catch(error => console.log(error));
});

router.get('/:id', (request, response) => {
	const id = request.params.id;
	Blog.findById(id)
		.then(result => response.render('details', { blog: result, title: 'Blog details'}))
		.catch(error => console.log(error));
});

router.get('', (request, response) => {
	Blog.find().sort({createdAt: -1})
		.then(result => {
			response.render('index', { title: 'All Blogs', blogs: result})
		})
		.catch(error => console.log(error));
});

module.exports = router;