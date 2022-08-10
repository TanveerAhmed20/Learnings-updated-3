//program to demo function creation and calling 
function fun1(){
    console.log("welcome function 1");
}

fun1();

let number  = Math.pow(10,16)*Math.random().toFixed(16);
console.log(number);


function lanka(){
    setTimeout(() => {
        console.log("welcome in lanka");
    }, 1000);
    usa();
}

function usa()
{
    console.log("welcome to usa");
}
lanka();