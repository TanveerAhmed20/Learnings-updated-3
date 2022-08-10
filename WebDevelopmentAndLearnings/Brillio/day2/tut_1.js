var ch = ['happy', 1];

for ( let x of ch ) {
    console.log(x);
}

var ch2 = new Array(1,2,3);

for ( let x of ch2 ) {
    console.log(x);
}


ch2.forEach( (x) => console.log(x));


var names = new Array("ashok","aravindh","bhavan","Vishal","Mohan","Anirudh");

names = names.sort();
console.log(names);

nums = [-1,-2,1,2,3,4,5,6,11,22,7,8];

nums = nums.sort((a,b)=>a - b);

console.log(nums);


//sorting as  "Ashok", "aravind","Bhavan","bhavan",
names.sort((a,b)=>{
   var l1 = a.length;
   var l2 = b.length; 
   var i1 = 0, i2 = 0;
   while(i1 < l1 && i2< l2){
    if(a.charAt(i1).toLowerCase() > b.charAt(i2).toLowerCase()) return 1;
    else if(a.charAt(i1).toLowerCase()< a.charAt(i1).toLowerCase()){
        return -1;
    }
    i1++, i2++;
   }
   if(l1==l2) return 0;
   else return l1-l2;
});

console.log(names);


var namesWithFiveChars = names.filter((name)=>{
        return name.length ==5;
});


// ARRAY FOR EACH METHOD
nums.forEach((x)=> console.log(x));

var newarr = new Array(1,2,3,4);
nums.push(...newarr);

console.log(nums);

nums.splice(0,0,...newarr);

console.log(nums);