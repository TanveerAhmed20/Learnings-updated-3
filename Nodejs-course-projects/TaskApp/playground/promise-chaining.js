require('../src/db/mongoose');
const User = require('../src/models/User');

// User.findByIdAndUpdate('62e88b96d29fed694efe1069',{age:"1"})
// .then(user => {
//   console.log(user);
//   return User.countDocuments({age:1})
// })
// .then(result => console.log(result))
// .catch(err => { console.log(err) });

//findbyIDandDelete

User.findByIdAndDelete('62e88b96d29fed694efe1069')
.then(user => {
  console.log(user);
  return User.countDocuments({age:1})
})
.then(result => console.log("deleted"))
.catch(err => { console.log(err) });
