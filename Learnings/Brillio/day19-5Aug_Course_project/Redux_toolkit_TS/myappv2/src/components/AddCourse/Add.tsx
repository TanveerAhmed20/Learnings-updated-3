import React from "react";
import axios from "axios";
import "./Add.css";
import {useState} from 'react'
import { addCourse } from "../../services";
import {useDispatch,useSelector} from 'react-redux'
import {addToCourse} from '../../store/courses/coursesSlice'
// type Course = {
//   courseId:string, 
//   courseName:string,
//   courseDuration:string,
//   courseFee:string
// }
const AddCourse = () => {
  const [course,setCourse] = useState({
    courseId:"",
    courseName:"",
    courseDuration:"",
    courseFee:""
  });

  const dispatch = useDispatch(); 

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(course);
    dispatch(addToCourse(course));
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
