// first of each salary 

const employees = require('./employees.json');

let visited = [];
const result  = employees.filter(emp=> {
    if(!visited.includes(emp.currency)){
        visited.push(emp.currency);
        return true;
    }
    return false;
});

console.log(result);
