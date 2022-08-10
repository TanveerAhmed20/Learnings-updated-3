const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tsk-manager-api');

//User is a constructor function

// const me = new User({
//     name: "Tanveer Ahmed",
//     email:"tnvrahmed98@gmail.com",
//     age :23,
//     password:"#Ri8"
// });

// const res = me.save(); // takes no args , returns a promise
// res.then(()=>{console.log("success");})
// .catch((err)=>{console.log("Error",err);});


// TASK Schema: 
// const Task = mongoose.model ('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false,
//         required:false
//     }
// });

// const newtask1 = new Task({
//     description: "Go to the washroom"
// });

// const newtask2  = new Task({
//     description: "go the the bed ",
//     completed : true
// });

// newtask1.save();