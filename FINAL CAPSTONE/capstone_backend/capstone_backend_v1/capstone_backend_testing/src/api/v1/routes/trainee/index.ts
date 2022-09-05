import { Router, Request, Response } from "express";
import { Trainee } from "../../../../types/trainee";
import TraineeCollection from "../../../../db/models/trainee";
import { customLogger } from "../../middleware/logging";
import { generateId } from "../../../../utils";
import multer from "multer";

// Storage setup to store files in the server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    file.fieldname === "resume"
      ? cb(null, "uploads/resume")
      : cb(null, "uploads/profilePic");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${req.body.name}_${file.fieldname}_${Date.now()}.${
        file.mimetype.split("/")[1]
      }`
    );
  },
});

const upload = multer({ storage: storage });

const traineeUploads = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "profilePic", maxCount: 1 },
]);

export const traineeRouter: Router = Router();

traineeRouter
  // GET /trainee (get all trainees)
  .get("/", async (req: Request, res: Response) => {
    enum reqTypes {
      all = "all",
      active = "active",
      deleted = "deleted",
    }
    let reqType: reqTypes = reqTypes.all;
    if (req.query.t && req.query.t.toString() in reqTypes)
      reqType = req.query.t as reqTypes;
    try {
      const page = req.query.p
        ? isNaN(Number(req.query.p))
          ? 1
          : Number(req.query.p)
        : 1;
      const perPage = req.query.pp
        ? isNaN(Number(req.query.pp))
          ? 10
          : Number(req.query.pp)
        : 10;
      if (reqType === "active") {
        const total = await TraineeCollection.countDocuments({
          isDeleted: false,
        });
        const pageCount = Math.ceil(total / perPage);
        const trainees = await TraineeCollection.find({ isDeleted: false })
          .skip((page - 1) * perPage)
          .limit(perPage)
          .sort({ traineeId: 1 });
        return res.status(200).json({
          page,
          pageCount,
          perPage,
          total,
          trainees,
        });
      } else if (reqType === "deleted") {
        const total = await TraineeCollection.countDocuments({
          isDeleted: true,
        });
        const pageCount = Math.ceil(total / perPage);
        const trainees = await TraineeCollection.find({ isDeleted: true })
          .skip((page - 1) * perPage)
          .limit(perPage)
          .sort({ traineeId: 1 });
        return res.status(200).json({
          page,
          pageCount,
          perPage,
          total,
          trainees,
        });
      } else if (reqType === "all") {
        const total = await TraineeCollection.countDocuments();
        const pageCount = Math.ceil(total / perPage);
        const trainees = await TraineeCollection.find({})
          .skip((page - 1) * perPage)
          .limit(perPage)
          .sort({ traineeId: 1 });
        return res.status(200).json({
          page,
          pageCount,
          perPage,
          total,
          trainees,
        });
      }
    } catch (err: any) {
      customLogger("error", err.message);
      return res.status(500).send(err.message);
    }
  })
  // GET /trainee/:id (get trainee by id)
  .get("/:id", async (req: Request, res: Response) => {
    try {
      if (isNaN(Number(req.params.id)))
        return res.status(400).send("Invalid ID");

      const trainee = (await TraineeCollection.findOne({
        traineeId: Number(req.params.id),
      })) as Trainee;
      if (!trainee) return res.status(404).send("Trainee not found");
      return res.status(200).send(trainee);
    } catch (err: any) {
      customLogger("error", err.message);
      return res.status(500).send(err.message);
    }
  })
  // !NOTE:
  // Compulsory fields are added by admin
  // Optional fields are added by user by filling the form (Update)

  // POST /trainee
  .post("/", async (req: Request, res: Response) => {
    // Programmatically generate traineeId and password
    const traineeId = await generateId(TraineeCollection);
    // Frontend should show password to user
    const password =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const trainee = {
      traineeId,
      ...req.body,
      password,
      isDeleted: false,
      isValid: false,
    } as Trainee;
    try {
      const newTrainee = await TraineeCollection.create(trainee);
      const result = await newTrainee.save();
      customLogger("success", `Trainee created at ${result.traineeId}`);
      return res.status(201).send(trainee);
    } catch (err: any) {
      customLogger("error", err.message);
      if (err.code === 11000)
        return res.status(400).send("Trainee with given email already exists");
      else
        return res
          .status(500)
          .send(
            err.message + ". Please check the document structure carefully."
          );
    }
  })
  // PUT /trainee
  .put("/:id", traineeUploads, async (req: Request, res: Response) => {
    delete req.body.traineeId;
    delete req.body.password;
    delete req.body.isDeleted;
    delete req.body.isValid;

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    const profilePic = files?.profilePic
      ? {
          filename: files?.profilePic?.[0].filename,
          path: files?.profilePic?.[0].path,
          size: files?.profilePic?.[0].size,
          type: files?.profilePic?.[0].mimetype,
        }
      : undefined;

    const resume = files?.resume
      ? {
          filename: files?.resume?.[0].filename,
          path: files?.resume?.[0].path,
          size: files?.resume?.[0].size,
          type: files?.resume?.[0].mimetype,
        }
      : undefined;

    try {
      // * Find the trainee added by admin
      const trainee = (await TraineeCollection.findOne({
        traineeId: Number(req.params.id),
      }).lean()) as Trainee;

      const updatedTrainee = {
        ...trainee,
        ...req.body,
        isValid: true,
        resume,
        profilePic,
      } as Trainee;

      const result = await TraineeCollection.updateOne(
        { traineeId: Number(req.params.id) },
        { $set: updatedTrainee }
      );

      if (result.matchedCount === 0)
        return res.status(404).send("Trainee not found");

      customLogger("success", `Trainee updated at ${updatedTrainee.traineeId}`);
      return res.status(200).send(updatedTrainee);
    } catch (err: any) {
      customLogger("error", err.message);
      if (err.code === 11000)
        return res.status(400).send("Trainee with given email already exists");
      else
        return res
          .status(500)
          .send(
            err.message + ". Please check the document structure carefully."
          );
    }
  })
  // DELETE /trainee
  .delete("/:id", async (req: Request, res: Response) => {
    try {
      const result = await TraineeCollection.updateOne(
        {
          traineeId: Number(req.params.id),
        },
        { $set: { isDeleted: true } }
      );

      if (result.matchedCount === 0) {
        customLogger("error", "Trainee not found");
        return res.status(404).send("Trainee not found");
      }

      if (result.modifiedCount === 0) {
        customLogger("error", "Trainee is already deleted");
        return res.status(400).send("Trainee is already deleted");
      }

      customLogger("success", `Trainee set as deleted`);
      return res.status(200).send(req.params.id);
    } catch (err: any) {
      customLogger("error", err.message);
      return res.status(500).send(err.message);
    }
  })
  // PATCH /trainee to set isDeleted to false
  .patch("/:id", async (req: Request, res: Response) => {
    try {
      const result = await TraineeCollection.findOneAndUpdate(
        {
          traineeId: Number(req.params.id),
        },
        { $set: { isDeleted: false } },
        { returnDocument: "after" }
      );

      //   if (result.ok === 0) {
      //     customLogger("error", "Trainee not found");
      //     return res.status(404).send("Trainee not found");
      //   }

      customLogger("success", `Trainee updated`);
      return res.status(200).send(result);
    } catch (err: any) {
      customLogger("error", err.message);
      return res.status(500).send(err.message);
    }
  });
