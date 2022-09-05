import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import trainer from "../../../../db/models/trainer";

const router = Router();

router.get('/trainers', (req: Request, res: Response) => {
    trainer.find({ isActive: true }).sort({ createdAt: -1 }).exec((err: any, data: any) => {
        if (err) {
            console.log(err)
            res.send(err)

        }
        else {
            console.log(data)
            res.send(data)
        }
    }
    )
})

router.post('/saveTrainer', (req: Request, res: Response) => {
    const { trainerId, trainerName, trainerCourse, trainerAvailability, trainerExperience, trainerJoiningDate, trainerEmail, trainerGender, trainerLocation } = req.body;
    let sliced = trainerJoiningDate.slice(0, 10);
    let newTrainer = new trainer({
        trainerName: trainerName,
        trainerCourse: trainerCourse,
        trainerAvailability: true,
        trainerExperience: trainerExperience,
        isActive: true,
        trainerEmail: trainerEmail,
        trainerJoiningDate: sliced,
        trainerGender: trainerGender,
        trainerLocation: trainerLocation
    })
    newTrainer.save().then((result: any) => {
        res.send(result)
        console.log(result)
    }).catch((err: Error) => {
        console.log(err)
        res.send("Type mismatch")
    })
})

router.post('/updateTrainer', (req: Request, res: Response) => {
    let id = req.body.trainerId
    console.log(req.body, id);
    trainer.findOneAndUpdate({ _id: req.body._id }, req.body,
        function (err: Error, data: Object) {
            if (err) {
                console.log(err);
                res.send(err)
            }
            else {
                trainer.find({ isActive: true }, (err: Error, data: Object) => {
                    console.log(data);
                    res.send(data)
                })
            }
        })
})

router.post('/deleteTrainer/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    const joiningDate = new Date(req.body.trainerJoiningDate);
    trainer.updateOne({ _id: id }, {
        trainerName: req.body.trainerName,
        trainerCourse: req.body.trainerCourse,
        trainerAvailability: req.body.trainerAvailability,
        trainerExperience: req.body.trainerExperience,
        isActive: false,
        trainerEmail: req.body.trainerEmail,
        trainerLocation: req.body.trainerLocation
    },
        function (err: Error, data: Object) {
            if (err) {
                res.send(err)
            }
            else {
                trainer.find({ isActive: true }).sort({ createdAt: -1 }).exec((err: any, data: any) => {
                    if (err) {
                        console.log(err)
                        res.send(err)

                    }
                    else {
                        console.log(data)
                        res.send(data)
                    }
                }
                )


            }
        })
})

router.get('/filterAvailability', (req: Request, res: Response) => {
    trainer.find({ trainerAvailability: true, isActive: true }, (err: Error, data: Object) => {
        res.send(data)
    })
})


//filter trainers based on their gender
router.get('/filterGender/:gender', (req: Request, res: Response) => {
    trainer.find({ trainerGender: req.params.gender, isActive: true }, (err: Error, data: Object) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    })
})

//filter trainers based on their location
router.get('/filterLocation/:location', (req: Request, res: Response) => {
    trainer.find({ trainerLocation: req.params.location, isActive: true }, (err: Error, data: Object) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }


    })
})

//filter on the basis of course
router.get('/filterCourse/:course', (req: Request, res: Response) => {
    trainer.find({ trainerCourse: req.params.course, isActive: true }, (err: Error, data: Object) => {
        if (err) {
            res.send(err)

        }
        else {
            res.send(data)
        }
    })
})

export default router;