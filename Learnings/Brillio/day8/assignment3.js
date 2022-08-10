
const data = require('./employees.json');

const result = data.filter((emp)=> emp.currency=='GBP' || emp.currency=='INR');

console.log(result);

