// write a function called atleasttwo that receives an array that receives an array and a callback as
// its argument .If at least two elements from the array return a truthy value when passed as an argument
// to the callback atleastTwo shoudl return true. if there arent at least two element from
// the arry that return a truhy value when passed as argument to the callback,atLeastTwo should return
// false

// const atleastTwo = (arr,callback) => {

// }
// console.log(atleastTwo([1,2,-0,NaN,""],(x)=>{
//     if(x===true) return true;
//     return false;
// }));


//using filter method

const atleastTwo_usingReduce= (arr,callback) => {
     callback(arr);
}
atleastTwo_usingReduce([1,2,3,-0,NaN,""],(arr)=>{
    let count = arr.reduce((acc,x) =>{ 
       return x? acc : acc+1;
    },0);
    console.log(count);
    if(count>2) console.log("yes");
    else console.log("no");
});