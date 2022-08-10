let arr = new Array(1,2,3,4,5,6);
let arr2 = new Array(1,2,[3,4,5],6);



// flat map 

console.log(arr2.flatMap(x=>x));


//from method 

console.log(Array.from(arr,(x)=>2*x));

// find  : retunrs the value of the first element tat passed a test
console.log("FIND METHOD");
const newarr = arr.find((x)=>x >2);
console.log(newarr);


// unshift 
console.log("UN SHIFT METHOD");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");


// splice method 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0,2,...[1,2]);
fruits=[...fruits.slice(0,2),...arr,...fruits.slice(1,2)];
console.log(fruits);

// start index where you want to intert new elements , remove 5 elements from the place where u want to insert 


// slice method 

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = fruits.slice(1,2);  // slice methods doesnt work internally 
console.log(fruits);

// slice(start index , end index (excluding end));


// index Of  
console.log("INDEX OF METHOD");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Orfadfa"));

// array.every method 


var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr.every((x) => x > 2));