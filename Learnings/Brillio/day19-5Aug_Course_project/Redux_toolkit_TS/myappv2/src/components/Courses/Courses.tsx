import React from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import {CourseType} from '../../types/types'
import "./Courses.scss";
import {useSelector,useDispatch} from 'react-redux'
import {fetchCourses,selectCourses,selectLoading} from '../../store/courses/coursesSlice';
const Courses = () => {
  const dispatch = useDispatch<any>();
  const courses  = useSelector(selectCourses);
  const loading = useSelector(selectLoading);
  useEffect( () => {
    dispatch(fetchCourses()); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courses]);
  useEffect(()=>{},[courses]);
  return (
    <div className="table-body">
      <div className="table-container">
        <div className="course-head">
           <div className="course-head-details">
              <div className="course-item">Course Id</div>
              <div className="course-title">Course Name</div>
              <div className="course-item">Course Duration</div>
              <div className="course-item">Course Fee</div>
            </div> 
          
          <div className="button-group">
      
          </div>
        </div>

        {loading==='idle'?<p>loading...</p>:courses.length === 0 ? (
          <h1>NO elements in the database</h1>
        ) : (
          <>
            {courses &&
              courses.map((ele:CourseType, idx:any) => <Course course ={ele} key={idx} />)}
          </>
        )}
      </div>
    </div>
    // <p>Hello</p>
  );
};

export default Courses;
