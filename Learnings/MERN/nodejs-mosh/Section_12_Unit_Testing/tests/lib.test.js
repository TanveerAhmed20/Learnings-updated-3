// const {absolute} = require('../lib'); // named import if export.absolute is used

const lib = require("../lib"); // default import  better approach else u have to destructure every function

test("Our first test", () => {
  // throw new Error('something failed')
});

//grouping test using describe
// Testing numbers
describe("absolute", () => {
  // note : if not using describe instead of `it` use `test`
  it("absolute - should return a positive numebr if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("absolute - should return a positive numebr if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("absolute - should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});


// Testing strings 
describe ('greet',()=>{
    it('should return a string',()=>{
        const result = lib.greet("Tanveer");
        expect(result).toEqual("Welcome Tanveer");// this is not general solution , use toMatch instead
        expect(result).toMatch(/Tanveer/); // returns "Tanveer" if match found
        expect(result).toContain('Tanveer');
    });

});


//testing Arrays
describe('getCurrencies',()=>{

    const result = lib.getCurrencies();

    //Too general testing - may fail 

    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific 
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');

    //proper way 

    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
    
    // ideal way 

    expect(result).toEqual(expect.arrayContaining(['EUR', 'AUD','USD']));
});

//testing objects 

describe('getProduct',()=>{
    it('should return the product with the given id',()=>{
        const result = lib.getProduct(1);

        // expect(result).toBe({id:1,price:10}); // will give test fail  toBe also checks for memory address
        expect(result).toEqual({id:1,price:10}); 
    });
});



//testing async functins 
const db = require('../db');
describe('applyDiscount',()=>{
    it('should apply 10% discount if customer has more than 10 points',
    ()=>{
        //replacing (overriding) original getcustomerSync with fake getCustomerSync
        db.getCustomerSync = (id)=>{
            console.log('Fake getCustomerSync Called');
            return {id:id,points:11};
        }
        const order = {customerId:1, totalPrice:10}; 
        lib.applyDiscount(order);
       
        expect(order.totalPrice).toEqual(9);
    });
});

// Interaction testing 
const mail = require('../mail');
describe('Notify customer with manual mock',()=>{
    it('should send email to the customer',
    ()=>{
        //wriring the mock functions
        //replacing (overriding) original getcustomerSync with fake getCustomerSync
        db.getCustomerSync = (id)=>{
            console.log('Fake Get customer Email Called');
            return {email:'a'}
        }
        //overrinding mail.send 
        let mailSent = false ;
        mail.send = function(mail, message){
            mailSent = true; // mail sent simulation
        }
        lib.notifyCustomer(1);

        expect(mailSent).toEqual(true);
    });
});

// jest mock function -fn()
// const jest = require('jest');
describe('Notify customer with manual mock',()=>{
    it('should send email to the customer',
    ()=>{
        db.getCustomerSync = jest.fn().mockReturnValue({email:'a'})
        mail.send  = jest.fn();
        lib.notifyCustomer(1);
        expect(mail.send).toHaveBeenCalled();
        // expect(mail.send).toHaveBeenCalledWith('a','...');// fails with strings, will owrk with non-string values like number boolean etc
        expect(mail.send.mock.calls[0][0]).toBe('a');
        expect(mail.send.mock.calls[0][1]).toMatch(/order/);
        
        expect(mail.send.mock.calls[0][1]).toContain('order');
    });
});