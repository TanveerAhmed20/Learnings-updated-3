const User = require("../models/User");
const express = require("express");
const router = new express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(403).send(err);
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id; // no need to convert string id to object id , it's taken care by mongoose
  try {
    const user = await User.find({ _id });
    res.status(201).send(user);
  } catch (err) {
    res.status(404).send(err);
  }

  //  await  User.find({_id})
  //   .then(users=> res.status(200).send(users))
  //   .catch(err => res.send(err));
});
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send(err);
  }

  // user
  //   .save()
  //   .then(() => {
  //       res.status(200).send("successfully added user");
  //   })
  //   .catch((err) => {
  //   res.status(400).send(err);
  //   });
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  console.log(isValidOperation);
  if (!isValidOperation) return res.status(400).send("invalid update request");

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).send("user not found");
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    // console.log(user);
    if (!user) return res.status(404).send("user not found");
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
