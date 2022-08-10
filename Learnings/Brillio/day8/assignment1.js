//read from employes.json and print data

const data = require('./employees.json');

console.log(data);

data.forEach(({id,name,salary,currency})=>{
    console.log(id,name,salary,currency);
})
