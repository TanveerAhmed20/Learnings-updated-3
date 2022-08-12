const express = require("express"); // express is an ORM
// express acts as a middleware between nodejs and the mongodb
const taskRouter = require('./routers/task');
const userRouter = require('./routers/users');
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
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server listning on port " + port);
});
