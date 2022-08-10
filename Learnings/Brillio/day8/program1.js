// const emps = [
//     {id: 1, sal: 150,   lastPaidDate: new Date(2021,3,1)},
//     {id: 2, sal: 450,   lastPaidDate: new Date(2021,2,1)},
//     {id: 3, sal: 350,   lastPaidDate: new Date(2021,2,1)},
//     {id: 4, sal: 650,   lastPaidDate: new Date(2021,3,1)}
// ];
// //How much do  I owe people for March Salary???
// //expected output: 800\


// let tobepaid = 0;
// emps.forEach((emp) => {
//         if(emp.lastPaidDate.getMonth()==3){
//             tobepaid+=emp.sal;
//         }
// });
// console.log(tobepaid);

// //reduce method 

// // const result = emps.reduce((acc,emp)=>{
// //     if(emp.lastPaidDate.getMonth()==3){
// //         acc+=em
// //     }
// // },0);




// const emps1 = [
//     {id: 1, sal: 150,   lastPaidDate: "2021-03-01"},
//     {id: 2, sal: 450,   lastPaidDate: "2021-02-01"},
//     {id: 3, sal: 350,   lastPaidDate: "2021-01-01"},
//     {id: 4, sal: 650,   lastPaidDate: "2020-12-01"},
//     {id: 5, sal: 350,   lastPaidDate: "2021-03-01"},
//     {id: 6, sal: 650,   lastPaidDate: "2021-02-01"},
   
// ];
// //How much did  I pay on each month???
// //expected output

// let results = {};


// emps1.reduce((acc,curr)=>{

// });



//bun , rescript(kind of typescript)

let  players = {
    "1": {
        "id": 10,
        "name":'Sachin',
        "type":'Batter'
    },
    "2": {
        "id": 20,
        "name":'Virat',
        "type":'Batter'
    },
    "3": {
        "id": 30,
        "name":'Rohit',
        "type":'Batter'
    }
}

// let buffer = JSON.parse(jsonObject);
// // let data = buffer.toString();

// for( let [key,values] of Object.entries(players)){
//     console.log(values);
//     values.forEach(([id,name,type]) => {
//         console.log(id);
//         console.log(name);
//         console.log(type);
//     });
// }

for (let {id,name,type} of Object.values(players)){
    console.log(id,name,type);
}


