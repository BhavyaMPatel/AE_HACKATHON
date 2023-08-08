//Backend For Request Resolver
//System Design 
//User Schema


const express = require("express");
const app = express()
const mongoose = require('mongoose');
const User=require('./model/user');
const jwt=require('jsonwebtoken')

const createToken=(userid,type)=>{
    return jwt.sign({userid,type},'Secret',{expiresIn:'1d'})
}

mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/RequestResolver",{useNewUrlParser: true});


const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set('view engine', 'ejs');



//Routes
app.get('/', async (req, res) => {
    res.send("Backend Server Of RequestResolver");
});

app.post('/login',async(req,res)=>{
    
    const {userid,password}=req.body;

    try{
        const login=await User.login(userid,password);
        res.status(200).json({userid,login});
    }catch(err){
        res.status(400).json({error:err.message});
    }
    
})


//Listen
app.listen(PORT, () => {
  console.log(`Application live on localhost:${PORT}`);
});
