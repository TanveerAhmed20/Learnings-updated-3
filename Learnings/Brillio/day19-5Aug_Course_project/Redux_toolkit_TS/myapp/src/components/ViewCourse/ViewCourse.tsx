import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourse, selectCourse } from "../../store/courses/coursesSlice";
import "./ViewCourse.scss";
const ViewCourse = () => {
  const course = useSelector(selectCourse);
  const dispatch:any = useDispatch();
  const { id } = useParams(); // other approach would be to use useParams() || ''  or useParams() ?? ''  - nullish coalesce operator ( ??) 

  useEffect(() => {
    dispatch(fetchCourse(id!)); // ! tells the compiler that there wont't be any possibility of id being `null` value
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
// || returns the right value is the left side is falsy 
// ?? returns the right value if the left side is null or undefined 
  useEffect(() => {}, [course]);

  // console.log(id);
  // console.log(course);
  return (
    <div className="table-container">
         <div className="course-head">
        <div className="course-item">COURSE ID</div>
        <div className="course-title">COURSE NAME</div>
        <div className="course-item">COURSE DURATION</div>
        <div className="course-item">COURSE FEE</div>
      </div>
      <div className="course-details">
        <div className="course-item">{course.courseId}</div>
        <div className="course-title">{course.courseName}</div>
        <div className="course-item">{course.courseDuration}</div>
        <div className="course-item">{course.courseFee}</div>
      </div>
    
    </div>
   );
};

export default ViewCourse;
