const _ = require('lodash');
const {User, validate} = require('../models/users');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const config = require('config');
const jwt = require('jsonwebtoken');


router.get('/',async (req,res) => {
   const users = await User.find();
   res.send(users);
});
router.post('/', async (req, res) => {
   const {error } = validate(req.body);
   if(error) return res.status(404).send(error.details[0].message);

   let user =  await User.findOne({email:req.body.email});

   if(user) return res.status(404).send("user already exists");

   user = new User(_.pick(req.body, ['name', 'email','password']));

   const salt = await bcrypt.genSalt(10);
   user.password  = await bcrypt.hash(user.password,salt);
   //using lodash
  // to implement good password , use Joi password complexity npm package
   user =  await user.save(); 


   // res.send(  _.pick(user, ['name', 'email']));

   // returning jwt into an http header
   const token = jwt.sign({_id:user._id},config.get('privatekey'));
   
   res.header('x-auto-token',token).send(  _.pick(user, ['_id','name', 'email']));

});

router.delete('/', async (req, res) => {
   const  user = await User.findByIdAndRemove(req.body.id);
 
   if (!user) return res.status(404).send('The user with the given ID was not found.');
 
   res.send(user);
 });

module.exports = router;