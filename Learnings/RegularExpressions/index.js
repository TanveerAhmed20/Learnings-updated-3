// 
const regex1 = 'foo(a*)bar';
console.log("fooaaabar".match(regex1));

const regex2 = 'foo(b*)bar';

// regex character class [] 

const regex3 = '[abc]' // one ot the characters inside the square brackets

const regex4 = '[fcl]oo';

const regex5 = '[^mh]oo';

// combination characte class 
//joo,koo,loo,moo,zoo
const regex6 = '[jklmz]oo';

// example 3: 

const regex7 = new RegExp('[j-zJ-Z]oo')
console.log("foo".match(regex7)=='foo');

//example 4

const regex8 = /x*\.y*/
console.log("xxx..yyyy".match(regex8));

// example no 20

const regex20 = /(haha){2}(ha){0,5}/;
// const regex20 = new RegExp('(haha){2}(ha){0,5}');
const exp =['ha',
'hahahahaha',
'hahaha',
'hahahaha',
'haha',
'',
'hahahahahaha',
'hahahahahahahaha',
'hahahahahahahaha'];

exp.forEach((x)=>console.log(regex20.test(x)));


// host 

const regex23 = new RegExp('^https?://[a-zA-z0-9]*\.((com)|(net)|(co.in))$');

console.log("https://website123.co.in".match(regex23));


// capture groups 
const str = '1280x720';
const strnew = str.replace(/([0-9]+)x([0-9]+)/, "$1!NEW_ID!$2")
console.log(strnew);


// capture groups 

const str2 = '914.581.3013';
const strnew2 = str2.replace(/([0-9]{3})\.([0-9]{3})\.([0-9]{4})/,"xxx.xxx.$3") 
console.log(strnew2);

// date problem -capture group 
const str3 = 'Jan 31st 1987';
const part1 = new RegExp('[A-Za-z]{3}');
const part2 = new RegExp('(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))');
const part3 = new RegExp('[0-9]{2}([0-9]{2})');
const final = new RegExp('([A-Za-z]{3})\s(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))\s[0-9]{2}([0-9]{2})');
console.log(str3.match(part1));
console.log(str3.match(part2));
console.log(str3.match(part3));
console.log(str3.match(final));
const strnew3 = str3.replace(/([A-Za-z]{3})\s(([1-2]?[0-9])|(3[0-1]))((st)|(nd)|(rd)|(th))\s[0-9]{2}([0-9]{2})/, "$1 $2 $10") 
console.log(strnew3);