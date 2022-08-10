
const fs = require('fs');
console.log('Starting server ');
setTimeout(() =>{
        console.log('inside timeout');
        const file = {name:'tanveer',company:'brillio'};
        const jsonFile = JSON.stringify(file);
        console.log(jsonFile);
        fs.writeFileSync('./data.json',jsonFile); 

        const dataJSON = fs.readFileSync('./data.json');
        const dataBuffer  = dataJSON.toString();
        const data = JSON.parse(dataBuffer);
        func(data); 
},1000);

function func(data){
console.log(data);
console.log('Stopping server ');
}