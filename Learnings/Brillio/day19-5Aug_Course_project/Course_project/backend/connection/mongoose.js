
const mongoose = require('mongoose');
const collectionName = "Brillio";
mongoose.connect('mongodb://localhost:27017/Brillio',{useNewUrlParser:true},(err)=>{
  if(err) console.log(`failed to connect to mongodb collection : ${collectionName}`);
  else console.log('connection established');
 })