const add =(a,b)=>{

    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            if(a<0 || b<0) 
            return reject('numbers must be non negative');
            resolve(a+b);
        }, 2000);
    })
}

const doWork =  async ()=>{

const sum1 =  await add(1,2);
const sum2 = await add(sum1,-3);
const sum3  = await add(sum2,4);
// throw new Error("something went wrong"); // executes catch
// return 'andrew'
return sum3;
}

doWork()
.then((res)=>{
    console.log('result',res)
})
.catch((err)=>{
    console.log('error:',err);
});