const path = require('path')
const express = require("express"); // express is an ORM
// express acts as a middleware between nodejs and the mongodb
const taskRouter = require('./routers/task');
const userRouter = require('./routers/users');
// starting the connection using mongoose
require("./db/mongoose");
const User = require("./models/User");
const Task = require("./models/Task");

//DOTENV configuration : note u donot need to require('dotenv') in every file if you are only using .env 
//and no path is given inside config else u have 
//to write this require statement in every file as path for config will be different for  each file


console.log(process.env.NODE_ENV)
console.log(path.resolve(__dirname, `../${process.env.NODE_ENV}.env`))
const result = require('dotenv').config({ path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`) });
if(result.error)
  throw result.error;
// console.log(result.parsed)


//middlewares
const cors = require("cors");
const app = express();
const port = process.env.PORT;
app.get('env')
app.use(cors()); // middleware

//  express.json() automatically parse incoming json into an js object for our use

// app.use((req,res,next)=>{
//   console.log("inside custom middleware")
//   console.log(req.method,req.path);
//   console.log("outside custom middleware")
//   if(req.method =='GET')
//   {
//     res.send('get requests are disabled')
//   }
//   else
//   next();
// })

//Goal : setup middleware for maintenance mode
//1 register a new middleware function 
// 2 sed back a maintainence message with a 503 status code 
//3 try your requests from the server and confirm status /message show s

// app.use((req,res,next)=>{
//   res.status(503).send('server under maintenance')
// })


app.use(express.json()); // middleware
app.use(userRouter);
app.use(taskRouter);

//

app.listen(port, () => {
  console.log("server listning on port " + port);
});

// const jwt = require('jsonwebtoken')
// const myfunction = async ()=>{
//   const token = jwt.sign({_id:'abcd'},'secretkey',{expiresIn:'5 sec'})
//   //sign ( unique identifier, secret )
//   //secret: used sign the token to make sure that the jwt hasn't been tampered with anything
//   console.log(token)

//   // VERIFYING THE JWT TOKEN 
//   try{
//     const data = jwt.verify(token,'secretkey');

//     console.log(data);

//     }
//     catch(err){
//       console.log("message")
//       console.log(err.message)
//     }
//   }
// myfunction();


// POPULATE METHOD : 


// const main = async ()=>{
//   // const task = await Task.findById('6309db2f182d8516f93b4ad7');
//   // await task.populate('users').execPopulate();
//   // console.log(task.);
//   const user = await User.findOne({_id:'6309c8cb7d456f0503db9fa6'}).populate('tasks');

//   console.log(user.tasks)

//   const task = await Task.findById('6309db31182d8516f93b4ada');
//   const tasks = await task.populate('owner');
//   console.log(task.owner)
// }
// main();


// MULTER 
// const multer = require('multer');
// const upload = multer(
//   {
//     dest:'images',
//     limits : {
//       fileSize: 1000000 // bytes - here it's set to 1000Kb or 1Mb
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docs|docx|pdf)/)){
//           return cb(new Error('Please upload a pdf/doc/docx'))
//         }
//         cb(undefined,true); // cb is callback 
//     }
//   }
// )
// app.post('/upload',upload.single('upload'),(req,res)=>{
//   res.status(200).send('uploaded');
// })