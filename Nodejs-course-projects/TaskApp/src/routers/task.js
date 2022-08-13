const Task = require("../models/Task");
const express = require("express");
const router = express.Router();

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    // console.log(user);
    if (!task) return res.status(404).send("user not found");
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks", async (req, res) => {
  // await Task.find({}, (err, task) => {
  //   if (!task) return res.status(404).send(err);
  //   res.status(201).send(task);
  // });
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id; // no need to convert string id to object id , it's taken care by mongoose
  // Task.find({ _id })
  //   .then((tasks) => res.status(200).send(tasks))
  //   .catch((err) => res.send(err));

  try {
    const task = await Task.find({ _id });
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      console.log("task saved");
      res.status(201).send("successfully added task");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const valid = ["description", "completed"];
  const validateBody = updates.every((update) => valid.includes(update));
  if (!validateBody) res.status(400).send("Invalid parameters");

  try {
    // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    const task = await Task.findById(req.params.id);
    // find by ID returns 
    if (task == null) throw new Error("Task not found");
    if (!task) return res.status(404).send("Task not found");
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
