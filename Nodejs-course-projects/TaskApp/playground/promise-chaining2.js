require('../src/db/mongoose');
const Task= require('../src/models/Task');


Task.findByIdAndDelete('62e972223580a12948257815')
.then(task => {
  console.log(task);
  return Task.countDocuments({completed:true})
})
.then(result => console.log(result))
.catch(err => { console.log(err) });
