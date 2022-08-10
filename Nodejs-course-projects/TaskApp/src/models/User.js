const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model ('User',{
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
});


module.exports = User;