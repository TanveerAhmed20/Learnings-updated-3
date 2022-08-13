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
  res.send(req.user)
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

router.post('/users/logout',auth,async (req,res)=>{
  try{
    req.user.tokens = req.user.tokens.filter(tokenElement=>tokenElement.token!=req.token)
    await req.user.save() ; 

    res.status(200).send(req.user);
  }
  catch(e){
    res.status(404).send(e.message);
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
    res.status(200).send(req.user);
  }
   catch(e){
    res.status(400).send(e.message)
   }
})

router.post('/users/login',async (req,res)=>{
  try{
    const user = await User.findByCredentials(req.body.email,req.body.password);
    const token = await user.generateAuthToken(); 
    res.status(200).send({user,token});
  }
  catch(err){
    res.status(404).send(err.message);
  }
})

router.post('/users/signup',async (req,res)=>{
  //  res.send('hello')
    const user = new User(req.body);
    try{
      await user.save() ; 
    }
    catch(err){
      return res.status(404).send(err);
    }

    const token = await user.generateAuthToken();
    res.status(200).send({user,token});
})

// Goal: move signnup send ck auth token 
// 1. generate a token for the saved user 
//2 send bck both the token and the user
// 3. create a new user from postman and confirm the token is there


module.exports = router;
