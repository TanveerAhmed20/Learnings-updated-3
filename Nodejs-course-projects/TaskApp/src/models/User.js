const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required: true
    },
    email:{
        type : String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid');
            }
        }
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('Invalid Age');
        }
    },
    password:{
        type : String,
        minLength:7,
        trim:true,
        required:true,
        validate(value){
            if(validator.contains(value.toLowerCase(),"password")){ //you can use a regex here 
            
                throw new Error('Password should not contain the term Password ');
            }
        }
    }
},{versionKey:false})



// Writing a middleware 
// post : after , pre : before schema model is created . 
userSchema.pre('save',async function(next){
    const user = this; // gives a reference to the document before it's save 
    if(user.isModified('password')){
        user.password = await bcryptjs.hash(user.password,8);
    }
    console.log('just before saving')
    next() ; // if we next call next we go the to actual flow of our application 
})

const User = mongoose.model('User',userSchema);

module.exports = User;