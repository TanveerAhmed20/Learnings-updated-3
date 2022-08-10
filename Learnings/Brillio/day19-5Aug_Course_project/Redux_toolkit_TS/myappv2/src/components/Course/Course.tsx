import React, { useState} from "react";
import { Link } from "react-router-dom";
import './Course.scss'
import {useDispatch} from 'react-redux';
import {deleteInCourse} from '../../store/courses/coursesSlice'
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditCourse from "../EditCourse/edit-course";
import {CourseProps} from '../../types/types'

const Course = ({course}:CourseProps) => {
  const {courseName,courseDuration,courseFee,courseId} = course;
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
  };
  const toggleEditCourseModal = () => {
    setModal(!modal);
    toggle();
  };
  const handleDeleteCourse=()=>{
      if(window.confirm('Are you sure you want to delete this course?'))
         dispatch(deleteInCourse({id:courseId}))    
    }
  return (
    <>
     <div className="course-row">
          <div className="course-details">
            <div className="course-item">{courseId}</div>
            <div className="course-title">{courseName}</div>
            <div className="course-item">{courseDuration}</div>
            <div className="course-item">{courseFee}</div>
          </div>
          <div className="button-group">
            <button className='btn' type="button"><Link to = {`/Courses/${courseId}`}>VIEW</Link></button>
            <button className='btn' type="button" onClick ={toggle}>EDIT</button>
            <button className='btn' type="button" onClick = {handleDeleteCourse}>DELETE</button>
          </div>
    </div>
    <Modal  isOpen={modal} toggle={toggleEditCourseModal} centered>
    <ModalHeader> EDIT PLAYER</ModalHeader>
    <ModalBody>
      <EditCourse data = {course} toggle = {toggle}/>
    </ModalBody>
  </Modal>
    
   
  
    </>
    
  
  );
};

export default Course;
