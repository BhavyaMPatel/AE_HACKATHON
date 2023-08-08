const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    userid:{
        type: String,
        required: [true,"Enter a Valid userId"],
        unique: [true,"Please Enter Unique UserId"]
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:false,
        lowecase:true,
        default:"requester"
    },
});


//Login Method
userSchema.statics.login=async function(userid,password){

    const user = await this.findOne({userid});

    if(!user){
    throw Error("User not found");
    }

    const match=await password.localeCompare(user.password)
        
    if(match!=0){
        throw Error('Invalid password');
    }
    
    return user;
}


const User=mongoose.model('user',userSchema);  
module.exports = User;  