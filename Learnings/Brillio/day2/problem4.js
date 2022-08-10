// develop an application to 8 numbers into an array and find the number of clumps in it

let arr1 = new Array(1,1,1,2,2,3,4,4);
let arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
let result = [];
let newarr = arr2.reduce( (acc,x)=>{
    if(acc.arr.length !==0 && acc.arr[0] != x) { acc = {count:acc.count +1,arr:[x]}; return acc;}
    acc.arr.push(x)
    return acc;
    },{count :0,arr:[]});

console.log(newarr.count+1);