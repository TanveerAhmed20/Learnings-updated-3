//testing fizzbuzz  
/// note toBe also checks the reference equality , so better not use with objects
const fizz= require("../exercise1"); //

describe('getProduct',()=>{

    it('should throw error if input is undefined',()=>{
        expect(fizz.fizzBuzz).toThrow(`Input not given`) // NOTE , when fucntion doesnt have parameters u need not wrap it 
    });
    it('should throw error if input is not a number',()=>{
        // const value = fizz.fizzBuzz("str");
        expect(()=>{fizz.fizzBuzz("hi")}).toThrow("Input should be a number.");
    })
 
    it('should return `FizzBuzz` if divisible by 3 and 5',()=>{
        //  const value = fizz.fizzBuzz(15);
        const result = fizz.fizzBuzz(15);
        console.log(result);
        expect(fizz.fizzBuzz(15)).toEqual('FizzBuzz'); // NOTE THE DIFFERENCE BETWEEN THE SYNTAX OF LINE19 AND LINE12  , .tothrow expects a function expresss , 
        // toEqual expects a value 
    })

    
    it('should return `Fizz` if divisible by only 3 ',()=>{
        //  const value = fizz.fizzBuzz(15);
        const result = fizz.fizzBuzz(3);
        console.log(result);
        expect(fizz.fizzBuzz(3)).toEqual('Fizz'); // NOTE THE DIFFERENCE BETWEEN THE SYNTAX OF LINE19 AND LINE12  , .tothrow expects a function expresss , 
        expect(result).toEqual('Fizz')
        //linen 28 and 29 are same things
        
        // toEqual expects a value 
    })

    it('should return `Buzz` if divisible by only 5 ',()=>{
        //  const value = fizz.fizzBuzz(15);
        const result = fizz.fizzBuzz(5);
        console.log(result);
        expect(fizz.fizzBuzz(5)).toEqual('Buzz'); // NOTE THE DIFFERENCE BETWEEN THE SYNTAX OF LINE19 AND LINE12  , .tothrow expects a function expresss , 
        expect(result).toEqual('Buzz')
        //linen 28 and 29 are same things
        
        // toEqual expects a value 
    })
})


