/*
develop an application to perform the following operation using a function

----    HOTEL SSHOKA MENU ----
1. idly (2.00)
2. Dosa(3.50)
3. Poori (4.60)
4. Wada (5.20)
5. Utappam (4.24)

enter the item code you like: 4,3 
how mnay plates o fwada you want : 5
ho many plates o fpoori you want : 6
total amount to pay is :48.4

*/



console.log("-----HOTEL ASHOKA MENU------");
let flag = true;
let total = 0;
let count =0;

async function test()
{
    // console.log("inside test");

// while(flag){
    // console.log("inside loop");
    // count++;
    // if(count===2) break;
     const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(`Enter choice`,(choice)=>{
        }
    );
   
    // console.log("enter choice\n 1. idly (2.00)\n 2. Dosa(3.50)\n3. Poori (4.60)\n4. Wada (5.20)\n5. Utappam (4.24) \n6.exit");
   
 
// }
        readline.close();
}

test();
// console.log(total);