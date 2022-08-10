


// problem 2 : 
/*
write a program to take an email and findout it is valid or not and fo rthat check the following 

a ) email id must be having one @ and . symbols
b) there must be a domain like 'com ' 'org' 'co.in'
c)  email should not have anoy other special chracters  other than @ and . 
d)its lenght must not be more than 16 chars before '@' symbol

*/


let email  = new String("tnvrahmed98@gmail.com");


const check = (email) =>{
    let countsymbols = {'@' : 0, '.' : 0};
    for(let x of email){
        if(x==='@'|| x==='.') countsymbols[x]++;
        else if(x>='A' && x<='z' ||x>-'A' && x<='z' ||x>='0' && x<='9') continue;
        else countsymbols[x]++;
    }
    if(Object.keys(countsymbols).length>2) return false;
    if(countsymbols['@'] > 1 || countsymbols['.'] > 1) return false;
    let first  = email.split('@')[0];
    if(first.length > 16) return false;
    return email.includes(".com")||email.includes(".co.in")||email.includes(".org")? true: false;
}

console.log(check(email));

