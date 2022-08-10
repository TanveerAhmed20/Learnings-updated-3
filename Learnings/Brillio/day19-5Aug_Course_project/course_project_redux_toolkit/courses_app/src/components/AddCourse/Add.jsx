import React from "react";
import axios from "axios";
import "./Add.css";
import { addCourse } from "../../services";

const AddCourse = () => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.courseId.value);
    // const { courseName, courseId, courseDuration, courseFee } = evt.target;
    // console.log(courseFee.value);
    const course = {
      courseName: evt.target.courseName.value,
      courseId: evt.target.courseId.value,
      courseDuration: evt.target.courseDuration.value,
      courseFee: evt.target.courseFee.value,
    };
    addCourse(course)
      .then(() => alert("Course Added"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="center">
      <h1>ADD PLAYER</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <input type="text" name="courseId" required="required" />
          <span>CourseID </span>
        </div>
        <div className="inputbox">
          <input name="courseName" type="text" required="required" />
          <span>CourseName</span>
        </div>
        <div className="inputbox">
          <input name="courseDuration" type="text" required="required" />
          <span>CourseDuration</span>
        </div>
        <div className="inputbox">
          <input type="text" name="courseFee" required="required" />
          <span>CourseFee</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
