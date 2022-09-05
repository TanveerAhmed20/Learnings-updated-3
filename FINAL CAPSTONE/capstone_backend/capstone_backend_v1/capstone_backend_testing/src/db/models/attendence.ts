
import { Schema, model } from 'mongoose'
import { AttendanceType } from '../../api/v1/routes/attendance/attendancePage.model'

type PresentType = {
    traineeId: String ;
    presentId: Boolean;
}
const schema = new Schema<AttendanceType>({
    date: {
        type: Date,
    },
   session: {
        type: String,
        enum:['M','E']
   },
   trainingId: {
    type: String,
    minlength: 1,
    maxlength: 255,
    trim: true,
    },
    attendance :{
        trainerId:{
            type: String
        },
        traineesPresent :[{
            type: Number
        }]
    }
}, { versionKey: false });
schema.index({date:1,session:1,trainingId:1},{unique:true});

const Attendance = model('attendance', schema);

export {Attendance};