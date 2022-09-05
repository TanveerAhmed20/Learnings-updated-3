const { Attendance } = require("../../../../db/models/attendence");
import { Router, Request, Response, RequestHandler } from "express";
import TraineeCollection from "../../../../db/models/trainee";
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: 'path/to/file.csv',
  header: [
      {id: 'name', title: 'NAME'},
      {id: 'lang', title: 'LANGUAGE'}
  ]
});
// var createCsvWriter = csvwriter.createObjectCsvWriter;

// // Passing the column names intp the module
// const csvWriter = createCsvWriter({
//   // Output csv file name is geek_data
//   path: "geek_data.csv",
//   header: [
//     // Title of the columns (column_names)
//     { id: "id", title: "ID" },
//     { id: "name", title: "NAME" },
//     { id: "age", title: "AGE" },
//   ],
// });

// // Values for each column through an array
// const results = [
//   {
//     id: "7058",
//     name: "Sravan Kumar Gottumukkala",
//     age: 22,
//   },
//   {
//     id: "7004",
//     name: "Sudheer",
//     age: 29,
//   },
//   {
//     id: "7059",
//     name: "Radha",
//     age: 45,
//   },
//   {
//     id: "7060",
//     name: "vani",
//     age: 34,
//   },
// ];
// Writerecords function to add records
// csvWriter
//   .writeRecords(results)
//   .then(() => console.log("Data uploaded into csv successfully"));

export const getAttendance: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const results = await Attendance.find({});
    return results.length === undefined || results.length == 0
      ? res.status(200).send([])
      : res.status(200).send(results);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};

export const createAttendance: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    await Attendance.create({
      date: req.body.date,
      session: req.body.session,
      trainingId: req.body.trainingId,
      attendance: {
        trainerId: req.body.attendance.trainerId,
        traineesPresent: req.body.attendance.traineesPresent,
      },
    });
    console.log("Data inserted at time:" + new Date()); // Success
    const results = await Attendance.find({ date: req.body.date });
    return results.length === undefined || results.length == 0
      ? res.status(200).send([])
      : res.status(200).send(results);
  } catch (err: any) {
    return res.status(400).send(err.message);
  }
};

export const getAttendanceAll: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const Trainees = await TraineeCollection.find();
  // console.log(Trainees);
  // const data = await Attendance.aggregate.lookup({ from: 'Trainees', localField: 'attendance.traineesPresent', foreignField: 'trainees.traineeId', as: 'Test' });
  // const attendanceDoc = await Attendance.find();
  // // res.send(attendanceDoc);
  // // const present = [];

  // // for(let i = 0; i < attendanceDoc.length; i++){
  // //     let obj = { date  : }
  // //     for( let j = 0; j <attendanceDoc[i].attendance.length(); j++){
  // //         present.push({ traineeId : attendanceDoc.attendance[j], present : true});
  // //     }
  // // }

  // return res.status(200).send(present);
  const data = await TraineeCollection.aggregate([
    {
      $project: {
        traineeId: 1,
        name: 1,
        email: 1,
        _id: 0,
        //   combination:1
      },
    },
    {
      $lookup: {
        from: "attendances",
        localField: "traineeId",
        foreignField: "attendance.traineesPresent",
        as: "attendance",
      },
    },
    {$unwind: '$attendance'},
    // {$project : {
    //   date:1,
    //   session:1,
    //   trainingId:1
    // }}
  ]);

  return res.status(200).send(data);
};
