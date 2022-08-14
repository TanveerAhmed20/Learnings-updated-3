const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')


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
        unique:true,
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
    ,
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
},{versionKey:false})

const jwt = require('jsonwebtoken')

// UserSchema.methods// similar to UserSchame.statics

userSchema.methods.generateAuthToken = async function (){
    const user = this;
    const token = jwt.sign({_id:user._id.toString()},'thisismynewcourse',{expiresIn:'7days'})
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token;
}

userSchema.methods.getPublicData  = async function(){
    const user  = this || [];
    const publicdata = ['name','email','age'];
    const publicUser = user.filter(x=>publicdata.includes(x));
    return publicUser;
}

// Middleware : Using the  Schema static object https://riptutorial.com/mongoose/example/10574/schema-statics

userSchema.statics.findByCredentials = async ( email,password) => {
    const user = await User.findOne({email:email});
   //findone returns the document
//    console.log(user)
    if(user == null) throw new Error(`Unable to login`);

    const userPassword = user.password;

    const isMatch = await bcrypt.compare(password,userPassword);
    // console.log(isMatch);
    if(isMatch){
        console.log('Successfully logged in');
    }
    else throw new Error('Unable to login')
    return user;
}


// Writing a middleware to hash passwords before saving
// post : after , pre : before schema model is created . 
userSchema.pre('save',async function(next){
    const user = this; // gives a reference to the document before it's save 
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    console.log('just before saving')
    next() ; // if we next call next we go the to actual flow of our application 
})

const User = mongoose.model('User',userSchema);

module.exports = User;