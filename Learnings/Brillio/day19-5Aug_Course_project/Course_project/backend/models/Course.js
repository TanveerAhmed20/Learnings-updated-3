const mongoose = require("mongoose");
const { FALSE } = require("sass");
//Attributes of the Course object
var courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: "This field is required!",
  },
  courseId: {
    unique:true,
    type: String,
  },
  courseDuration: {
    type: String,
  },
  courseFee: {
    type: String,
  }
},{versionKey:false});
const Course =  mongoose.model("Course", courseSchema);

exports.Course = Course;
