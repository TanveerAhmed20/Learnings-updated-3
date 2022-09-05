import mongoose from "mongoose";

var trainerSchema = new mongoose.Schema({
    trainerName:{
        type:String
    },
    trainerCourse:{
        type:String
    },
    trainerAvailability:{
        type:Boolean
    },
    trainerExperience:{
        type:String
    },
    trainerJoiningDate:{
        type: String
    },
    isActive: {
        type: Boolean || String
    },
    trainerEmail:{
        type:String
    },
    trainerGender:{
        type:String
    },
    trainerLocation:{
        type:String
    }
},{collection:'trainers', timestamps: true});
const Trainer = mongoose.model('Trainer',trainerSchema);

export default Trainer;