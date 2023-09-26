const express = require('express');
const db = require('./database/connection');
const BlogPost = require('./database/models');
const cors = require('cors');
const authRouter = require('./routes/auth');
const app = express();
const path = require('path')
const BlogRouter = require('./routes/blog')
const UserRouter = require('./routes/user')

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());
app.use('/auth', authRouter)
app.use('/blog', BlogRouter)
app.use('/user', UserRouter)

app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));





app.listen(4000,()=>{
    console.log("Listening on port 4000")
})

