import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { deleteCourse } from "../../services";
import EditCourse from "../EditCourse/edit-course";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {getCourse} from '../../store/courses/coursesSlice'
const Course = () => {
  const dispatch = useDispatch();
  const course = useSelector(dispatch(getCourse));
  const { courseName, courseId, courseDuration, courseFee } = course;
  const [modal, setModal] = useState(false);
  
  const toggle = () => {
    setModal(!modal);
  };
  const toggleEditCourseModal = () => {
    setModal(!modal);
    toggle();
  };
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete")) return;
    deleteCourse(courseId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


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
            <button className='btn' type="button" onClick={toggle}>EDIT</button>
            <button className='btn' type="button"><Link to = {`/Courses/${courseId}`}>VIEW</Link></button>
            <button className='btn' type="button" onClick = {handleDelete}>DELETE</button>
          </div>
    </div>
     <Modal isOpen={modal} toggle={toggleEditCourseModal}>
     <ModalHeader> EDIT PLAYER</ModalHeader>
     <ModalBody>
       <EditCourse data = {course} toggle = {toggle}/>
     </ModalBody>
   </Modal>
    </>
   
  );
};

export default Course;
