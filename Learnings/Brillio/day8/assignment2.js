
const data = require('./employees.json');
const Total_salaries = data.reduce((acc,curr)=>{
    if(curr.currency=='USD'|| curr.currency =='INR'){
        if(curr.currency in acc){
            acc[curr.currency] += curr.salary;
        }
        else acc[curr.currency] = curr.salary;
    }
    return acc;
}
,{});

Total_salaries['INR'] = Total_salaries['INR'].toFixed(2);
Total_salaries['USD'] = Total_salaries['USD'].toFixed(2);
console.log(Total_salaries);