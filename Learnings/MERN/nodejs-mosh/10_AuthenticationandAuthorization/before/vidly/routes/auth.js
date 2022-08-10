const _ = require('lodash');
const {User} = require('../models/users');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

if(!config.get('privatekey')){
  console.error('FATAL ERROR:  private key is not defined');
  process.exit(1);
}

function validateUser(req) {
  const schema = {
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}

router.get('/',async (req,res) => {

});
router.post('/', async (req, res) => {
   const {error } = validateUser(req.body);
   if(error) return res.status(400).send(error.details[0].message);  // error == null

   let user =  await User.findOne({email:req.body.email});
   if(!user) return res.status(400).send("Inv alid user or password");

   let result = await bcrypt.compare(req.body.password,user.password); //false 

    if(!result)  return res.status(400).send(error.details[0].message );

  //  res.send("authentication successful");
   //instead of sending a message  , we send a JSON web token to the client

   const token = jwt.sign({_id:user._id},config.get('privatekey'));
   res.send(token);
});



module.exports = router;