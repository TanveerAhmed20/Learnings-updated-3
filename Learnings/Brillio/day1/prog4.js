// wirte a program to acccpet a number between 1 and 9999 and print it in words 

let number = 1001;
let temp  = number;
// console.log(temp);
const digits={
    0 : "",1: "one",2: "two",3: "three",4: "four",5: "five",6: "six",7: "seven",8: "eight",9: "nine",10:"ten",11: "eleven",12: "twelve",13: "thirteen",
    14: "forteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",18: "eighteen", 19: "ninetine", 20:"twenty",30:"thirty", 40 : "forty", 50 : "fifty", 60 : "sixty",
    70 : "seventy",80 : "eighty",90 : "ninety",100 : "hundred",1000: "thousand"
};

let thousands = parseInt(number/1000);
let hundreds = parseInt((number%1000)/100);

let tens = parseInt(number%100);
// console.log(thousands , hundreds , tens);
let digit = number.toString().length;
switch(digit){
    case 1:
        console.log(digits[number]);
        break;
    case 2:

        if(number>11 && number < 19) {tens = console.log( digits[number]); break;}
        console.log(digits[parseInt(number/10)*10] +" "+digits[number%10]);
        break;
    case 3:
        if(number%100>11 && number%100 < 19) {
            tens = digits[number%100]; 
            console.log(digits[parseInt(number/100)]+" hundred "+ tens);
            break;
        }
        console.log(digits[parseInt(number/100)]+" hundred "+digits[parseInt(((number)%100)/10)*10] +" "+digits[number%10]);
        break;
    case 4 :
        console.log(digits[parseInt(number/1000)]+" thousand "+ digits[parseInt((number%1000)/100)]+" hundred "+digits[parseInt(((number)%100)/10)*10] +" "+digits[number%10]);
        break;
    default:
}
        