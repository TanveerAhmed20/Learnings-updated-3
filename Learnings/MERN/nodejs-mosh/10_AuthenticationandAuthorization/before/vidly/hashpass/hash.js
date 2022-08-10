// use  npm install bcrypt for genreating hash values 

const bcrypt = require('bcrypt');

const gethash = async ()=>{
   const salt = await bcrypt.genSalt(10);
   const hashed = await bcrypt.hash('1234',salt);
   console.log(salt);
   console.log(salt);
}

gethaah();