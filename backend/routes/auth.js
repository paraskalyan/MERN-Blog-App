const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../Models/Users')

router.post('/register', async (req, res)=>{
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User Registered");
    }
    catch(error){
        console.log('Error while registering')
        res.status(500).send("Error while registering")
    }
})

router.post('/login',async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username}).exec();
        if(!user) return res.status(404).json({error: "User not found"});
        const check = bcrypt.compareSync(req.body.password, user.password)
        if(!check) return res.status(401).json({error: "Invalid username or password"});
        return res.redirect('/blog')    
    }
    catch(error){
        console.log(error)
        return res.status(500).send("Error while login")
    }
})



module.exports = router;