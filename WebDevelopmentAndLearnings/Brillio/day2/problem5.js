/*
sodexo issues food coupons to the empoyees of brillio in different denominations like 10, 20, 30, 50,80, 100

and they are expired at diff dates like
 10->7 days
20->8 days 
50->10 days 
80->7 days 
100->5 days 

from the day of issuance 
if an employee was issued 3 of 10s , 4 of 50s ,3 of 80s 
and the employee has to pay them in a transaction of 400 (if the emmplyee was using it after N days ) 
how many coupons he had  to use from eachdenominationin proper order and which e would be using them print it on 
console


*/

const details = {
    "10":7,
    "20":8,
    "50":10,
    "80":7,
    "100":5
}
    