import { Router } from "express";
// import { addLogin } from "./signUpPage.controller";

const {getAttendanceAll,createAttendance,getAttendance} = require('./attendancePage.controller');

const router = Router();

router
    .route('/')
    .get(getAttendance)
    .post(createAttendance);

router
    .route('/All')
    .get(getAttendanceAll)
export default router;