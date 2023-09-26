const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    followers:[        
            {
                type: mongoose.Types.ObjectId,
            }
    ],
    following:[
        {
                type: mongoose.Types.ObjectId
            }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users',UserSchema);
