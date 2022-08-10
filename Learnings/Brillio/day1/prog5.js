// //write a program to accept two dates in string format dd/ mm/ yyyy and find out the following 
/*
 a) no of days
 b) no of months
 c) no of years 
 d) no of hours, minutes , seconds and milliseconds

*/

let a = "12/30/2014";
let b = "12/30/2016";
let datetime_a = new Date(a+" 00:00:00");
let datetime_b = new Date(b+" 00:00:00");

console.log(datetime_a);
const time = datetime_b.getTime()- datetime_a.getTime();

let secs = time/1000;
let min = secs/60;
let hours = min/60;
let days = parseInt((hours)/24);
let months = parseInt(days/30);
let years = parseInt(days/365);
console.log(`number of days : ${days}`);
console.log(`number of years : ${years}`);
console.log(`number of months : ${months}`);
