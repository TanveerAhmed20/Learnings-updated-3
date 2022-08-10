/*
Create a function that takes two dates and returns the number of days
 between the first and second date
*/


const solve = (start,end) => {
    let datetime_a = new Date(start+" 00:00:00");
    let datetime_b = new Date(end+" 00:00:00");
    const time = datetime_b.getTime()- datetime_a.getTime();
    if(time<0) {
        return null;
    }
    let millisec_in_day = 1000 * 60 * 60 * 24;
    let days = time/millisec_in_day;
    console.log(`number of days : ${days}`);
    return days;
};

const onClickfunc = () =>{
    var a = document.getElementById('inp_1').value; 
    var b = document.getElementById('inp_2').value;
    var result = document.getElementById('result');
    var output = solve(a,b);
    if(output!==null) 
    result.innerHTML = `Result :${output} days`;
    else alert(' start date and end date invalid');

}


