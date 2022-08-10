
// filter gbp and inr


const employees = require('./employees.json');

const filtered = data.filter((emp)=> emp.currency=='GBP' || emp.currency=='INR');


console.log(filtered);

