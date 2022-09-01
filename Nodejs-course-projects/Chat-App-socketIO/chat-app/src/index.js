const express = require('express')
const cors = require('cors');
const app = express();
const path = require('path');


require('dotenv').config();

const publicDirectory = path.resolve(__dirname,'../public');
const PORT = process.env.PORT;

// middlewares 
app.use(cors());
app.use(express.json());
app.use(express.static(publicDirectory))

app.listen(PORT,()=>{
    console.log('listening on port: ' + PORT);
})