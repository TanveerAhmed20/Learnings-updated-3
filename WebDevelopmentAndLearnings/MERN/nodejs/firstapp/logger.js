var url = 'http://mylogger.io/log';

const log = (message) => { 
    //send http request
    console.log(message);  
};


const random = (message)=>{
    console.log(message);
};


module.exports.log = log;
// module.exports.url = url;
// we can also chnage the url name while sending to external
module.exports.url = url;

module.exports.random= random;


//loading a module 

