/*
1.load and parse the JSON data
2.Change the name and age property using your info 
3.Stringify the changed object and overwrite the original data
4.Test your work by viewing data in the JSON file
*/

const fs = require('fs');

const jsonData = fs.readFileSync('1-json.json');

const buffer= jsonData.toString();
const JSONData = JSON.parse(buffer);
console.log(JSONData);
  
// JSONData.title  = "The last man standing";
// JSONData.author = "Tanveer";


//stringify converts to JSON data type
const updatedJSON = JSON.stringify(JSONData);
fs.writeFileSync('1-json.json', updatedJSON);