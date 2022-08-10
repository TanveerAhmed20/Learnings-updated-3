import React,{useState,useEffect} from 'react'
import {useParams}  from 'react-router-dom'
import {getCourses} from '../../services'
import './ViewCourse.scss'
const ViewCourse = () => {
  const [course, setCourse] = useState([]);
  
  // console.log(course);
  const {id} = useParams();
  
  useEffect(()=>{
        getCourses(id)
        .then(res=>{setCourse(res.data);})
        .catch(err => console.log(err))

  },[]);

  useEffect(()=>{},[course]);

  console.log(id);
  console.log(course);
  return (
    <div className = "course-details">
        
    <div className='course-item'>
       {course.courseId}
    </div>
    <div className='course-title'>
       {course.courseName}
    </div>
    <div className='course-item'>
       {course.courseDuration}
    </div>
    <div className='course-item'>
       {course.courseFee}
    </div>
   </div>
  )
}

export default ViewCourse