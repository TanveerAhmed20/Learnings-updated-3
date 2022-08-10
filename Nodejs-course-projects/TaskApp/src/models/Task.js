const mongoose = require('mongoose');

// TASK Schema: 
const Task = mongoose.model ('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:false
    }
});

const newtask1 = new Task({
    description: "Go to the washroom",
   
});

module.exports = Task;