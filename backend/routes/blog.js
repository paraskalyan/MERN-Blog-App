const BlogRouter = require('express').Router();
const multer = require('multer');
const BlogPost = require('../database/models');
// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads'); // Store uploaded images in the 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null,file.fieldname + Date.now() + '-' + file.originalname); // Rename the file to avoid collisions
    },
  });

const upload = multer({ storage: storage });


BlogRouter.get('/',async (req,res)=>{
    try{
        const data = await BlogPost.find()
        res.json(data)
    }
    catch(error){
        console.log(error)
    }
})

BlogRouter.get('/:id',async (req, res)=>{
    try{
        const blog = await BlogPost.findById(req.params.id)
        if (blog){
           res.send(blog)
        }
    }
    catch(error){
        res.send(error)
    }
})  

BlogRouter.post('/save', upload.single('image') ,(req,res)=>{
    const { title, content, category, userId } = req.body;
    const img = req.file.filename;
    try{
        const blog = new BlogPost({
            userId: userId,
            title: title,
            content: content,
            category: category,
            image: img
        })
        blog.save();
        console.log('Data saved successfully');
    }
    catch(error){
        console.log(error)
    }
    res.send('Blog Saved')
})

BlogRouter.put('/update/:id',async (req,res)=>{
    const { id } = req.params;
    const{ title, content, author } = req.body;
    try{
        const blog = await BlogPost.findByIdAndUpdate(id, { title, content, author })
        res.json(blog)

    }
    catch(error){
        console.log("ERROR", error)
    }
    
})

BlogRouter.delete('/delete/:id',async (req,res)=>{
    const{ id } = req.params;
    try{
        const blog = await BlogPost.findByIdAndDelete(id);
        if (!blog) res.status(404).send("Blog Post not found");
        console.log("DELETED")
        res.status(200).send("DEleted")
    }
    catch(error){
        console.log("DELETE ERROR",error)
        res.status(500).send("ERROR WHILE DELETING")
    }
})

module.exports = BlogRouter;
