function welcomePeople (x:string|string[]){
    if(Array.isArray(x)){
        console.log("hello " +x.join(" and "));
    }
    else console.log("welcome lone traveller" +x);

}

welcomePeople(['sandeep','jahanvi','pranav']);
welcomePeople('tanveer');