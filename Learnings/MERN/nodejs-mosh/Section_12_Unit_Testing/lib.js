//testing numbers 
module.exports.absolute = function(number){
    // if(number>= 0) return number;
    return number>=0 ? number:-number;
}

//testing strings 

module.exports.greet = (name)=>{
 return 'Welcome '+name;
}


//testing arrays 

module.exports.getCurrencies  = ()=>{
  return ['USD','AUD', 'EUR'];
}


module.exports.getProduct  = (id)=>{
  return {id:id,price:10};

}


const db = require('./db');


// mock functions

// this below teach how to unit test on functions that rely on external resources. 
// for example there is a chance that our function depends on exernal resources 
// this may cause fail in our unit test if resources are fetched on time 


module.exports.applyDiscount = (order)=>{
  const customer = db.getCustomerSync(order.customerId);
  if(customer.points> 10 ){
    order.totalPrice *=0.9;
  }
}

//mock function -2 
const mail = require('./mail');

module.exports.notifyCustomer = function(order){
  const customer  = db.getCustomerSync(order.customerId);
  mail.send(customer.email,'Your order was placed successfully');
}

// BETTER WAY TO WRITE MOCK FUNCTION USING JEST - fn() method 

