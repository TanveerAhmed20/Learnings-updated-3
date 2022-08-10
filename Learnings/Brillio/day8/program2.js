function createCounter(){
    let count = 0 ; 
    return { 
        increment :()=>count++
        ,
        decrement : ()=> count --
        ,
        currentCount :()=>count
    }
}

let mycounter = createCounter();

let newcounter = mycounter;

console.log(mycounter.currentCount());
console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.currentCount());
console.log(mycounter.decrement());
console.log(mycounter.decrement());
console.log(mycounter.currentCount());


newcounter.increment();
console.log(mycounter.currentCount());
let mycounter2= createCounter();
console.log('Second object');
console.log(mycounter2.currentCount());



