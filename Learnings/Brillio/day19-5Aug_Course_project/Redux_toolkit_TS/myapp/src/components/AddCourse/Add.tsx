import React from "react";
import "./Add.css";
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addCourseThunk} from '../../store/courses/coursesSlice'

const AddCourse = () => {
  const [course,setCourse] = useState({
    courseId:"",
    courseName:"",
    courseDuration:"",
    courseFee:""
  });

  const dispatch = useDispatch<any>(); 

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(course);
    dispatch(addCourseThunk(course));
  };

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>)=>{
    evt.preventDefault();
    switch (evt.target.name) {
      case "courseId":
        setCourse({
          ...course,
          courseId: evt.target.value,
        });
        break;
      case "courseName":
        setCourse({
          ...course,
          courseName: evt.target.value,
        });
        break;
      case "courseDuration":
        setCourse({
          ...course,
          courseDuration: evt.target.value,
        });
        break;
      case "courseFee":
        setCourse({
          ...course,
          courseFee: evt.target.value,
        });
        break;
      default:
        break;
    }
  }
  return (
    <div className="center">
      <h1>ADD Course</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <input type="text" onChange ={handleOnChange}  name="courseId" required />
          <span>CourseID </span>
        </div>
        <div className="inputbox">
          <input name="courseName" onChange ={handleOnChange}  type="text" required />
          <span>CourseName</span>
        </div>
        <div className="inputbox">
          <input name="courseDuration" onChange ={handleOnChange}  type="text" required />
          <span>CourseDuration</span>
        </div>
        <div className="inputbox">
          <input type="text" onChange ={handleOnChange} name="courseFee" required />
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
