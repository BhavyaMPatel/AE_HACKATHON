const mongoose = require('mongoose');

const PostSchema=new mongoose.Schema({
    userid:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"active"
    },
    feedback:{
        type:String,
        default:"",
    },
    postid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    approveDate:{
        type:Date,
        default:""
    }
});

const Post=mongoose.model('post',PostSchema);  
module.exports = Post;  