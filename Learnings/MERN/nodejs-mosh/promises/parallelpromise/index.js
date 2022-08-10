const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async operation 1...');
        resolve(1);
        // reject(new Error('async operation 1 failed'));

    },2000);
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async operation 2...');
        resolve(2);

    },2000);
});

//kick off both asyn operation and do something after 

Promise.all([p1, p2]).then((result)=>{ console.log(result) }).
catch((err)=>{ console.log(err) });

//if we want to stop the exection after one of the promises is fulfilled then we can use Promise.race()

Promise.race([p1, p2]).then((result)=>{ console.log(result) }).
catch((err)=>{ console.log(err) });
