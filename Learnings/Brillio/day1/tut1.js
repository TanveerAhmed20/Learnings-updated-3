console.log('started ');

var a = "12";
var b = 12;
var c = 12.5;

console.log(parseInt(a)+b+c);
console.log(a+b+c);

//working with boolean 
console.log(true+true);


// null

var a = null;
var b = null;
console.log(a+b);


//undefined 

var a = undefined;
var b = undefined;
console.log(a+b);

//

var student = {
    id : 1, 
    name : "tanveer",
    roll : "1815010",
    email: "tnvrahmed98@gmail.com"
};

var student2 = {
    id : 1, 
    name : "tanveer",
    roll : "1815010",
    email: "tnvrahmed98@gmail.com"
};


if(student===student2) console.log("yes"); else console.log("no");

// different hashcode for each object

console.log(student);