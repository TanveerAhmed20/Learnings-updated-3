const express = require("express");
const cors = require("cors");
const app = express();
const requestDate = require("./middleware/requestDate");
require("./connection/mongoose");
const { Course } = require("./models/Course");

//middlewares
app.use(express.json());
app.use(cors());
// app.use(requestDate);

// app.get("/courses", async (req, res) => {
//   const courses = await Course.find({});
//   res.status(200).send(courses);
//   // console.log(req.requestDate);
// });

app.get("/courses/:id?", async (req, res) => {
  const id = req.params.id;
  let courses;

  if (id) courses = await Course.findOne({ courseId: id });
  else courses = await Course.find({}).sort({ courseId: 1 });

  if (courses === undefined || courses.length == 0)
    return res.status(200).send([]);

  res.status(200).send(courses);
});

app.post("/courses", async (req, res) => {
  if(Object.keys(req.body).length==0) return res.status(404).send("body empty");

  const course = new Course(req.body);
 
  course
    .save()
    .then(() => res.status(201).send(course))
    .catch((err) => res.status(400).send(err.message));
});

/// same as patch request
app.post("/updateCourse", async (req, res) => {
  if(Object.keys(req.body).length==0) return res.status(404).send("body empty");

  try{
      const result = await Course.findOneAndUpdate({ courseId: req.body.courseId },req.body);
      // result is null if Course was not found
      if(result===null) throw new Error(`Course to Edit doesn't exist`);
      const updateDoc = await Course.find({}).sort({courseId:1});
      res.status(200).send(updateDoc);
  }
    catch(err){
      res.status(404).send(err.message);
    }
  
});

app.post("/delete", async (req, res) => {
  if(Object.keys(req.body).length==0) return res.status(404).send("body empty");

  try{
    const result = await Course.findOneAndDelete({ courseId: req.body.courseId })
    //result is null if it's not able to find the course
    if(result===null) throw new Error(`Course to delete doesnt exist`);
    
    const rest = await Course.find({}).sort({courseId:1});
    res.send(rest);
  }
  catch(err){
     res.send(err.message);
  }
}
);

//LISTENING
const port = 3006;
app.listen(port, () => console.log("listening on port" + port));

// app.delete("/courses/:id?", async (req, res) => {
//   const id = req.params.id;
//   if (!id) return res.status(400).send({ message: "ID Must be provided" });
//   let courses;
//   // get courses array

//   courses = await Course.find({});

//   if (courses.length == 0)
//     return res.status(201).send({ message: "Database is Empty" });

//   //find course with courseId
//   const course = courses.find((e) => e.courseId === id);

//   Course.deleteOne({ _id: course._id })
//     .then(() =>
//       res.status(201).send({ message: "courses deleted successfully" })
//     )
//     .catch((err) => res.status(200).send(err));
// });

// app.patch("/courses/:id", async (req, res) => {
//   const id = req.params.id;

//   const course = await Course.find({ courseId: id });

//   if (course.length == 0) res.status(404).send({ message: "Course not found" });

//   console.log(course);
//   await Course.updateOne(
//     { courseId: id },
//     {
//       $set: {
//         courseName:
//           req.body.courseName === ""
//             ? course[0].courseName
//             : req.body.courseName,
//         courseDuration:
//           req.body.courseDuration === ""
//             ? course[0].courseDuration
//             : req.body.courseDuration,
//         courseFee:
//           req.body.courseFee === "" ? course[0].courseFee : req.body.courseFee,
//       },
//     }
//   )
//     .then(function () {
//       res.sendStatus(200);
//     })
//     .catch(function (error) {
//       console.log("Could not insert data" + error); // Failure
//       res.status(400).send("Bad Request");
//     });
// });


