const mongoose = require('mongoose');
// schema = define the strcture of the document
//model surround schema and provides an interface which communicate with a db collection
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	snippet: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
}, { timestamps: true});

// Somehow, it gonna look for Blog's' collection
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;