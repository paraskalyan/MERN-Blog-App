const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    image :{
        type: String,
    },
    created:{
        type: Date,
        default: Date.now
    }
});

const BlogPost = mongoose.model('BlogPost', blogSchema);
module.exports = BlogPost;