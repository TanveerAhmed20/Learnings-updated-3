const fs = require('fs');

const data  = fs.readFileSync('./2-json.json');

let result  = JSON.parse(data.toString());


result.name = "tanveer";
result.planet = "mars";

result = JSON.stringify(result);
fs.writeFileSync('./2-json.json', result);
console.log(result);