const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://paraskalyan:parasdb@cluster0.ewnzp7q.mongodb.net/Blog-App?retryWrites=true&w=majority')
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to database')
})

db.on('error',()=>{
    console.log('ERROR')
})

module.exports = db;