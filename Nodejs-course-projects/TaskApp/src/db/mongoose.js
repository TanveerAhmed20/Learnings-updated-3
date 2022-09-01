const mongoose = require('mongoose');
const path = require('path')
// console.log('inside mongoose')
// console.log(path.resolve(__dirname, '../dev.env'))
require('dotenv').config({ path: path.resolve(__dirname,`../../${process.env.NODE_ENV}.env`) });
// console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL);

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