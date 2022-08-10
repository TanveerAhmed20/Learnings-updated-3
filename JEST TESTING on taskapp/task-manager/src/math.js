module.exports.calculateTip  = (total,tipPercent)=>{

    const tip  = total * tipPercent;
    return total +tip ; 
};

module.exports.add = (a,b)=>{
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            if(a<0 || b<0)
            return reject("numbers must be non-negative")
            resolve(a+b);
        },1000);
    });
}