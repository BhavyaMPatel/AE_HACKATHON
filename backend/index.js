//Backend For Request Resolver
//System Design 
//User Schema
const express = require("express");
const app = express()
const mongoose = require('mongoose');
const User=require('./model/user');
const Flow=require('./model/workflow');
const Post=require('./model/post');
const fs=require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });


const jwt=require('jsonwebtoken')

const createToken=(userid,type)=>{
    return jwt.sign({userid,type},'Secret',{expiresIn:'1d'})
}

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/RequestResolver",{useNewUrlParser: true});


const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.get('/', async (req, res) => {
    res.send("Backend Server Of RequestResolver");
});

app.post('/login',async(req,res)=>{
    
    const {userid,password}=req.body;

    try{
        const login=await User.login(userid,password);
        const token=createToken(userid,login.type);
        res.status(200).json({userid,login,token});
    }catch(err){
        res.status(400).json({error:err.message});
    }
    
})

app.get('/workflow',async(req,res)=>{
    Flow.find({}).then((flow)=>{
            res.status(200).json({Flow:flow})
    })
});

app.post('/uploadquery',upload.single('image'),async(req,res)=>{
    //Assume Query Never Deleted Only Status Will Change
    console.log(req.file);
    Post.count({}).then(count => {
        var object={
            postid:count,
            userid:req.body.UserId,
            description:req.body.Description,
            category:req.body.Category,
            name:req.file.filename,
            image:{
            data: fs.readFileSync('D:/AE_HACKATHON/backend/uploads/'+req.file.filename),
            contentType: 'image/*'
            }
        }
    
        try{
            Post.create(object);
            res.status(200).json({status:"Done"});
        }catch(err){
            res.status(400).json({error:"Error"});
        }

    })

})

app.get('/uploadquery/:userid', function(req, res){
    Post.find({userid:req.params.userid}).then((post)=>{
        res.status(200).json({Post:post})
})
})

//Listen
app.listen(PORT, () => {
  console.log(`Application live on localhost:${PORT}`);
});
