// function greet(name,callback){
//     console.log(name+ ' Inside greet');
//     callback();
// }
// var callMe = "hello";

// function callMe(){
//     console.log("inside callMe")
// }
// greet('peter',callMe);


// console.log(f1(5,7));

// setTimeout(function(){
// var f1 = function(a,b){
//     return a+b;
// }},2000);

// function f1(a,b){
//     return a-b;
// }

// console.log(f1(5,7));



// function test(n){
//     if(n>0){
//         console.log(n);
//         test(n-1);
//     }

// }

// setTimeout(() => {
//     test(100);
// }, 2000);

// setTimeout(() => {
//     test(10);
// }, 1000);
// setTimeout(() => {
//     test(50);
// }, 1000);



function fact(n){
    if(n===1) return 1;
    return n*fact(n-1);
}

console.log(fact(5));