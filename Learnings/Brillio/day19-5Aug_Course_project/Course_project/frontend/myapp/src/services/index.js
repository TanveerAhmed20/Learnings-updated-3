import axios from "axios";

const base = "http://localhost:3006";

export function getCourses(id='') {
  return axios.get(`${base}/courses/${id}`);
}


export function deleteCourse(id) {
  return axios.delete(`${base}/courses/${id}`);
}


export function addCourse(course) {
  return axios.post(`${base}/courses`,course,{
    headers : {
      "Content-Type": "application/json",
    }
  });
}


export function editCourse(id,course){
  return axios.patch(`${base}/courses/${id}`,course,{
    headers : {
      "Content-Type": "application/json",
    }
  })
}