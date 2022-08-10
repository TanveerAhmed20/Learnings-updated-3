const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(()=>{console.log('connected to mongoDB')})
.catch((err)=>{console.error('couldnt connect to mongodb'+ err);});

const Course = mongoose.model('Course',new mongoose.Schema({
    name: String,
    author :String,
    tags:[String],
    date : {type:Date , default: Date.now},
    isPublished: Boolean
}));

const course  = new Course({
    name :'node.js course',
    author : 'tanveer',
    tags: ['frontend', 'backend'],
    isPublished:true

});

const createCourse = async ()=> {
    const result = await course.save();
    console.log(result);
}

createCourse();