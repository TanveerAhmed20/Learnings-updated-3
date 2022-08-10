// days in month 
const days =[31,28,31,30,31,30,31,31,30,31,30,31];

const checkleap = (year) => {
    return (((year % 4 == 0) && (year % 100 != 0)) ||
    (year % 400 == 0));
}
document.getElementById('btn_8').
addEventListener('click', function(e) {
    const date = document.getElementById('input_date').value;
    const d = new Date(date);
    let month = d.getMonth();
    let year = date.split(' ')[2];
    if(checkleap(parseInt(year)) && month ===1) return alert('No of days in month: '+ parseInt(days[month]+1));
    return alert('No of days in month: '+ days[month]);
});