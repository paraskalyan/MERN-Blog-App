const UserRouter = require('express').Router();
const BlogPost = require('../database/models');
const User = require('../Models/Users')
const mongoose = require('mongoose')
UserRouter.get('/:id',(req, res)=>{
    console.log("aaad")
})

UserRouter.get('/blog/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const blogs = await BlogPost.find({userId: id})
        res.send(blogs)
    }
    catch(err){
       res.send(err)
    }
})

UserRouter.put('/follow',async (req, res)=>{
    const { followId, userId } = req.body;
    try{

        const userToFollow = await User.findByIdAndUpdate(followId, {
           $push:{followers: userId}
        },{new: true});
        
        const userFollowedBy = await User.findByIdAndUpdate(userId,{
            $push:{following: followId}},
            {new: true});
        
        if (userToFollow && userFollowedBy) res.status(200).send("User followed")

    }
    catch(err){
        res.status(500).send(err)
    }

})

module.exports = UserRouter
