import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { editCourse } from "../../services";

const EditCourse = ({data ,toggle }) => {
  const coursedef = {
    courseId: data.courseId,
    courseName: data.courseName,
    courseDuration: data.courseDuration,
    courseFee: data.courseFee
  };
  const [course, setCourse] = useState(coursedef);

  const onHandleChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const saveCourse = (evt) => {
    evt.preventDefault();
    console.log(course);
    editCourse(course.courseId,course)
    .then((res)=>console.log(res))
    .catch(err=>console.log(err));
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
