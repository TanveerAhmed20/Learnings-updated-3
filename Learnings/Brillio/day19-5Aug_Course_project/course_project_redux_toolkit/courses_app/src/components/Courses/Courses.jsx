import React from "react";
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import Course from "../Course/Course";
import "./Courses.scss";
import { getCourses } from "../../services";
import { selectAllCourses } from "../../store/courses/coursesSlice";


const def = [
  {
    courseId: "",
    courseName: "",
    courseDuration: "",
    courseFee: "",
  },
];
const Courses = () => {
  const courses = useSelector(selectAllCourses);
  useEffect(() => {
    getCourses()
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.log(err));
  }, [courses]);

  return (
    <div className="table-body">
      <div className="table-container">
        <div className="course-head">
          <div className="course-head-content">
            <div className="course-details">
              <div className="course-item">Course Id</div>
              <div className="course-title">Course Name</div>
              <div className="course-item">Course Duration</div>
              <div className="course-item">Course Fee</div>
            </div>
          </div>
          <div className="course-head-blank"></div>
        </div>

        {courses.length === 0 ? (
          <h1>NO elements in the database</h1>
        ) : (
          <>
            {courses &&
              courses.map((ele, idx) => <Course course={ele} key={idx} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
