import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Course from "../Course/Course";
const base = "http://localhost:3006";
import "./Courses.scss";
import { getCourses } from "../../services";

const def = [
  {
    courseId: "",
    courseName: "",
    courseDuration: "",
    courseFee: "",
  },
];
const Courses = () => {
  
  const [courses, setCourses] = useState(def);
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

        {courses.length == 0 ? (
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
