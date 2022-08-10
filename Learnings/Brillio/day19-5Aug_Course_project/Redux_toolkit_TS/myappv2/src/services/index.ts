import axios from "axios";
import {CourseType} from '../../src/types/types'
const base = "http://localhost:3006";

export function getCourses() {
  return axios.get(`${base}/courses/`);
}
export function getCourse(id:string){
  return axios.get(`${base}/courses/${id}`);
}
// export function deleteCourse(id:string) {
//   return axios.delete(`${base}/courses/${id}`);
// }

export function deleteCourse(id:string) {
  const course  = {courseId:id}
  return axios.post(`${base}/delete`,course,{
    headers : {
      "Content-Type": "application/json",
    }
  });
}

export function addCourse(course:CourseType) {
 
  return axios.post(`${base}/courses`,course,{
    headers : {
      "Content-Type": "application/json",
    }
  });
}
// export function editCourse(id:string,course:CourseType){
//   return axios.patch(`${base}/courses/${id}`,course,{
//     headers : {
//       "Content-Type": "application/json",
//     }
//   })
// }
export function editCourse(id:string,course:CourseType){
  return axios.post(`${base}/updateCourse`,course,{
    headers : {
      "Content-Type": "application/json",
    }
  })
}
