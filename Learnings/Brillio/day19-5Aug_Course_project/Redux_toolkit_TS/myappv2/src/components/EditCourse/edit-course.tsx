import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {editInCourse} from '../../store/courses/coursesSlice'
import {useDispatch} from 'react-redux'
import {EditCourseProps} from '../../types/types'

const EditCourse = ({data ,toggle} :EditCourseProps) => {

  const dispatch = useDispatch<any>()

  const [course, setCourse] = useState({
    courseId: data.courseId,
    courseName: data.courseName,
    courseDuration: data.courseDuration,
    courseFee: data.courseFee
  });

  const onHandleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const saveCourse = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // dispatch in redux toolkit takes only payload argument in object format 
    dispatch(editInCourse({
      id:data.courseId,
      course:course
    }))
    toggle();
  };
  return (
    <>
      <h4>Input the Fields to Update</h4>
      <Form onSubmit={(evt) => saveCourse(evt)}>
        <FormGroup>
          <Label>CourseName</Label>
          <Input
            type="text"
            name="courseName"
            value = {`${course.courseName}`}
            onChange={onHandleChange}
            placeholder="enter name"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Course Duration</Label>
          <Input
            type="text"
            value = {`${course.courseDuration}`}
            name="courseDuration"
            onChange={onHandleChange}
            placeholder="Course Duration"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Course Fee</Label>
          <Input
            type="text"
            value = {`${course.courseFee}`}
            name="courseFee"
            onChange={onHandleChange}
            placeholder="Course Fee"
          ></Input>
        </FormGroup>

        <Button type="submit">EDIT Course</Button>
      </Form>
    </>
  );
};
export default EditCourse;
