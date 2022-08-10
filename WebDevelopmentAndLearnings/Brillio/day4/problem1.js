// develop an application to create and bankaccount object with properties like accountno , holdername , balance 
// and perform the below operations 
/*
a) display the account details having balance more than 7000 rupees
b) withdraw 2500 from the account and display details about operation
c) deposit 4500 into the account and display details about operation
d) transfer 3500 t oanother account and display details about operation

*/


function Bank(bankname){
    this.bankname = bankname,
    this.accounts = [],
    this.account_nos = 0,
    this.addAccount = function(account){
        ++this.account_nos;
        account.accountno = this.account_nos;
        // console.log(this.account_nos);
        this.accounts.push(account);
    },
    this.getAccounts = function(){
        return this.accounts;
    }
}

function Account(holdername,balance){
    this.accountno,
    this.holdername = holdername ,
    this.balance = balance
}

let account1 = new Account("tanveer",1000);
let account2 = new Account("bishwaraj",10000);
let account3 = new Account("sandeep",15000);
let bank1 = new Bank("hdfc");


bank1.addAccount(account1);
bank1.addAccount(account2);
bank1.addAccount(account3);


// a) display accounts with balance > 7000
const loadbank = (bank) =>{
    return bank.getAccounts();
}

const display_lessThanMinBalance = (bank,minbalance) => {
    const accounts = bank.getAccounts();
    const result = accounts.filter((x)=>x.balance> minbalance);
    console.table(result);
}

display_lessThanMinBalance(bank1,7000);


// b) widthraw 2500 from the account and display opeartion details 

const withdraw = (bank,accountNo,amount) =>{
    const accounts = loadbank(bank1);
    const found  = accounts.filter((x)=>x.accountno===accountNo);
    if(found===0) {console.log("bank account not found"); return ;}
    if(found[0].balance - amount < 0) {console.log("balance insufficient"); return ;}
    found[0].balance -= amount;
    console.log(`withdrawl of Rs ${amount} successful .\n current balance : Rs ${found[0].balance}` );
}

withdraw("hdfc",1,100);

const deposit= (bank,accountNo,amount) =>{
    if(amount < 500) {console.log("Minimum deposite amount is $500"); return ;}
    const accounts = loadbank(bank1);
    const found  = accounts.filter((x)=>x.accountno===accountNo);
    if(found===0) {console.log("bank account not found"); return ;}
    found[0].balance += amount;
    console.log(`deposit of $ ${amount} successful .\n current balance : $ ${found[0].balance}` );
}

deposit("hdfc",1,600);

const transfer = (bank_1,account1,bank_2,account2,amount) =>{
    const account_bank2 = loadbank(bank1);
    const account_bank1 = loadbank(bank1);
    const found1  = account_bank1.filter((x)=>x.accountno===account1);
    const found2  = account_bank2.filter((x)=>x.accountno===account2);
    

    if(found1===0) {console.log("bank account1 not found"); return ;}
    if(found2===0) {console.log("bank account2 not found"); return;}

    if(found1[0].balance < amount) {console.log("insufficient balance to transfer"); return ;}

    found1[0].balance -= amount;
    found2[0].balance += amount;

    console.log(`Transder of $ ${amount} successful .\n current balance : $ ${found1[0].balance}` );
}

transfer("hdfc",1,"hdfc",2,100);
