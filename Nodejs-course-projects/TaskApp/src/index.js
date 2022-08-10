const express = require("express"); // express is an ORM
// express acts as a middleware between nodejs and the mongodb

// starting the connection using mongoose
require("./db/mongoose");
const User = require("./models/User");
const Task = require("./models/Task");

//middlewares
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3005;

app.use(cors()); // middleware
app.use(express.json()); // middleware
//  express.json() automatically parse incoming json into an js object for our use

app.get("/users", async (req, res) => {
  //  await User.find({})
  //  .then(users=> res.status(200).send(users))
  //  .catch(err => res.send(err));

  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(403).send(err);
  }
});
app.get("/users/:id", async (req, res) => {
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
app.post("/users", async (req, res) => {
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


app.patch('/users/:id', async (req, res) => {
  try{
      const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
      if(!user) return res.status(404).send('user not found');
      res.send(user);
  }catch(err) { 
    res.status(400).send(err);
  }
});


app.get("/tasks", async (req, res) => {
  // await Task.find({}, (err, task) => {
  //   if (!task) return res.status(404).send(err);
  //   res.status(201).send(task);
  // }); 
  try{
    const tasks = await Task.find({});
    res.status(200).send(tasks);

  }catch (err) {
    res.status(404).send(err);
  }
});

app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id; // no need to convert string id to object id , it's taken care by mongoose
  // Task.find({ _id })
  //   .then((tasks) => res.status(200).send(tasks))
  //   .catch((err) => res.send(err));

  try{
    const task = Task.find({ _id });
    res.status(200).send(task);

  }catch(err) {
    res.status(500).send(err);

  }
});

app.post("/tasks", (req, res) => {
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


app.patch('/tasks/:id', async (req, res) => {
  try{
      const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
      if(!user) return res.status(404).send('user not found');
      res.send(user);
  }catch(err) { 
    res.status(400).send(err);
  }
});


app.listen(port, () => {
  console.log("server listning on port " + port);
});
