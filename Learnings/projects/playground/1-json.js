const fs = require("fs");
const book = {
    title:"edo is the enemy",
    author : "ryan holiday"
}

// JSON.stringify: TAKES object , arrry returns : json string refr
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parseData = JSON.parse(bookJSON);
console.log(parseData);

fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();

console.log("CONVERTED BUFFER ", dataJSON);
