const User = require("../models/User");
const express = require("express");
const router = new express.Router();
const auth = require('../middleware/auth');

router.get("/users", auth, async (req, res) => {
  console.log('inside GET users')
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(403).send(err);
  }
});

router.get('/users/me',auth,async (req,res)=>{
  // res.send('hello')
  res.send({user:req.user,token:req.token})
})


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

  // below code can be simplified using await keyword
  // user
  //   .save()
  //   .then(() => {
  //       res.status(200).send("successfully added user");
  //   })
  //   .catch((err) => {
  //   res.status(400).send(err);
  //   });
});


//goal : refactor the update profile route 
//1 . update the url to /users/me 
//2 . add the authentication middleware into the mix 
// 3. use the existing user document instated of fetching via param id 
//4 test your work in postman

router.patch('/users/me',auth,async (req,res)=>{
  const updates = Object.keys(req.body);
  console.log('updates')
  console.log(updates);
  const validupdates = ['name','email','password','age'];
  const isValidOperation = updates.every(element=>validupdates.includes(element));
  if (!isValidOperation) return res.status(400).send("invalid update request");
  const user  = req.user;
   updates.forEach(x=>{
     user[x] = req.body[x];
   })         
  await user.save();  
  return res.status(200).send({message:'Password changed',token:req.token});
})

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
    // const user = await User.findByIdAndUpdate(req.params.id, req.body);
    // if (!user) return res.status(404).send("user not found");

    // Note: Note :  findbyIdAndUpdate() bypassed mongoose schema , it directly updates into the database.

    //So we we try to do something like pre middlewares it won't give any console.log statements

    const user = await User.findById(req.params.id);
    if (!user || user == null) {
      return res.status(404).send("user not found");
    }

    updates.forEach((update) => {
      // accessing property dynamically
      user[update] = req.body[update];
    });

    await user.save();

    return res.send(user);
  } catch (err) {
    return res.status(400).send(err);
  }
});

// router.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findOneAndDelete({ _id: req.params.id });
//     // console.log(user);
//     if (!user) return res.status(404).send("user not found");
//     return res.send(user);
//   } catch (err) {
//     return res.status(400).send(err);
//   }
// });

router.post('/users/logout',auth,async (req,res)=>{
  try{
    req.user.tokens = req.user.tokens.filter(tokenElement=>tokenElement.token!=req.token)
    await req.user.save() ; 

    return res.status(200).send({user:req.user,token:''});
  }
  catch(e){
    return res.status(404).send(e.message);
  }
})

//exercise : create a way to logout of all sessions

//1.setup post /users/logoutAll
//2.Create the router handler to wipe the tokens array
// - send 200 or 3500
// test your work 


router.post('/users/logoutAll',auth,async(req,res)=>{
  try{
    req.user.tokens = [];
    await req.user.save();
    return res.status(200).send(req.user);
  }
   catch(e){
    return  res.status(400).send(e.message)
   }
})

router.post('/users/login',async (req,res)=>{
  try{

      const user = await User.findByCredentials(req.body.email,req.body.password);
      // console.log(user)
      user.getPublicData();
      const token = await user.generateAuthToken(); 
      console.log('inside user login api')
      const data = await user.getPublicData();

      /// IMPORTANT NOTE : user.getPublicDate returns a promise so make sure to get data sepeartely 
      // i.e u cannot get data by directly doing user.getPublicData() as this returns a promise 
      //so make sure to use await or use then() to resolve then promise 
     
     
     console.log(data);
      // return res.status(200).send({user:data,token});
  
      return res.status(200).send({user:data,token});
    }
  catch(err){
    return res.status(404).send(err.message);
  }
})

router.post('/users/signup',async (req,res)=>{
    const user = new User(req.body);
    try{
      await user.save() ; 
    }
    catch(err){
      return res.status(404).send(err);
    }
    const token = await user.generateAuthToken();
    return res.status(200).send({user,token});
})

// Goal: move signnup send ck auth token 
// 1. generate a token for the saved user 
//2 send bck both the token and the user
// 3. create a new user from postman and confirm the token is there


// delete authenticated user 
const Task = require('../models/Task')
router.delete('/users/me',auth,async (req,res)=>{
  console.log("hello")
  try{
    // await Task.deleteMany({owner:req.user._id}); // bette to use middleware .pre('remove')
    await req.user.remove() ; // acheives same result as findOneAndDelete
    return res.status(200).send({message:"success",token:''});
  }
  catch(er){
    res.status(500).send(er.message);
  }
})

module.exports = router;
