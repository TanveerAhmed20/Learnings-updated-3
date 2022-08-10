export type CourseType = { 
    courseId?:string,
    courseName?:string,
    courseDuration?:string,
    courseFee?:string
  }
type toggleType = () => void;

export type EditCourseProps = {
  data : CourseType,
  toggle:toggleType
}

export type CourseProps = {
  course : CourseType
}