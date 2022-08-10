/*
 develop an application to store student details like is,name,score 
 perform the following 
 a) sort the students by score in descending order
 calculate the sum of scores of all students 
 display the student details who passed if the pass score is 60 out of 100
 display the student details who got 2nd hightest in the same subjetc

*/

const { SlowBuffer } = require("buffer");

let details = [
{
    id: 1,
    name:"tanveer",
    score : 90,
    subject: "mechanics"
},
{
    id: 1,
    name:"tanveer",
    score :50,
    subject: "TOC"
},
{
    id: 2,
    name:"bishwaraj",
    score : 33,
    subject : "mechanics",
},
{
    id: 2,
    name:"bishwaraj",
    score :100,
    subject : "TOC"
},
{
    id: 3,
    name:"sandeep",
    score : 100,
    subject : "mechanics"
},
{
    id: 3,
    name:"sandeep",
    score : 90,
    subject : "TOC"
}
];
const groupByCategory = details.groupBy(product => {
    return product.subject;
  });

  console.log(groupByCategory);
  


let totalscore = details.reduce((acc,c) => {return acc+c.score;},0);
console.log("TOTAL SCORE " +totalscore);

let passedstudents = details.filter((x) => { return x.score >60; });
console.log("PASSED STUDENTS ");
console.table(passedstudents);

// var idwise = {};

// details.forEach((x) => {
//     idwise[x.id].push(x);
// });

// console.log(idswise);

function groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

let groupbysubject = groupArrayOfObjects(details,"subject");
// console.log(groupbysubject);
  

// groupbysubject.forEach(x =>{
//  x.sort((a,b)=>a.score-b.score);
// });

// console.log(groupbysubject);

// console.table(groupbysubject);

for ( let [x,y] of Object.entries(groupbysubject)){

 y.sort((a,b)=>b.score-a.score);
}

// console.log(groupbysubject);

let secondineach = {};

for(let [x,y] of Object.entries(groupbysubject)){
 secondineach[x] = y[1];
};

console.log('');
console.log('SECOND in each subject');

console.table(secondineach);

console.log("\nSORTED OUTPUT IN DESCENDING ORDER BY SCORE");

// console.log(groupbysubject);


for (let [x,y] of Object.entries(groupbysubject)){
    console.log("SUBJECT : "+x);
   console.table(y);
}