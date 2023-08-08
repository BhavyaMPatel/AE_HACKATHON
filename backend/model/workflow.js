const mongoose = require('mongoose');

const WorkFlow=new mongoose.Schema({
    name:{
        type: String,
        lowecase: true,
        unique: true
    }
});

const Work_Flow=mongoose.model('workflow',WorkFlow);  
module.exports = Work_Flow;  