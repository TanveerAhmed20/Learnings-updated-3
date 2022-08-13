const mongoose = require("mongoose");

// TASK Schema:

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  { versionKey: false }
);

//MIDDLEWARE
// post : after , pre : before schema model is created . 
taskSchema.pre('save',async function(next){
    const task = this; // gives a reference to the document before it's save 
    if(task.isModified('description')){
       console.log("description updatd")
    }
    console.log('just before saving')
    next() ; // if we next call next we go the to actual flow of our application 
})
//creating the model 
const Task = mongoose.model("Task",taskSchema);


const newtask1 = new Task({
    description: "Go to the washroom"
  });
  
module.exports = Task;
