const { request, response } = require('express');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

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


app.get('/', (request, response) => {
	response.redirect('/blogs');
});

app.get('/about', (request, response) => {
	response.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);

app.use((request, response) => {
	response.status(404).render('404', { title: '404' });
});