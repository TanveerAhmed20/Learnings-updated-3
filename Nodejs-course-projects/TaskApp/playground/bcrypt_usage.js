const bcrypt = require('bcryptjs')
const myFunction = async()=>{
    const password = "#Riku1998";
    const hashedPassword = await bcrypt.hash(password,8);

    const isMatch = await bcrypt.compare('#riku1998',hashedPassword);
    console.log(isMatch);

}

myFunction();