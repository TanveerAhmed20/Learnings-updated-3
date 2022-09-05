import mongoose from "mongoose";
import dotenv from "dotenv";
// import { Gender } from "../../types/trainee";
dotenv.config();

const traineeSchema = new mongoose.Schema({
  traineeId: {
    type: Number,
    required: "'traineeId' was not provided.",
  },
  email: {
    type: String,
    required: "'email' is required.",
  },
  password: {
    type: String,
    required: "'password' was not provided.",
  },
  isDeleted: {
    type: Boolean,
    required: "'isDeleted' is required",
  },
  isValid: {
    type: Boolean,
    required: "'isValid' is required",
  },
  training: {
    trainingId: {
      type: Number,
      required: "'trainingId' is required",
    },
    name: {
      type: String,
      required: "Training 'name' is required",
    },
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  resume: {
    type: Object || null,
  },
  profilePic: {
    type: Object || null,
  },
});

const TraineeCollection = mongoose.model(
  process.env.TRAINEE_COLLECTION as string,
  traineeSchema
);

export default TraineeCollection;
