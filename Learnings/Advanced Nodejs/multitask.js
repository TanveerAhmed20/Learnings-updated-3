// Teaches about Effect of file system calls on the thread pool 
// note : https doesnt work with the thread pool . It's an independently working task

const start = Date.now();
const crypto  = require('crypto');
const fs= require('fs');
const https = require('https');
function doRequest(){
    https
    .request('https://www.google.com',res=>{
        res.on('data',()=>{});
        res.on('end',()=>{
            console.log("Fetch",Date.now()-start);
        });
    
    })
    .end();
}
function doHash(){  
    crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
        if(err) throw err;
        // console.log(derivedKey.toString('hex')); 
        console.log("1:",Date.now()-start);
    })
}

doRequest();
doHash();
doHash();
doHash();
doHash();

fs.readFile('multitask.js','utf8',()=>{
    console.log('FS:',Date.now()-start);
})



// my order of executionn : read -> crypto -> fetch


//actual order of funning 
// Fetch 975
// 1: 1111
// FS: 1112
// 1: 1141
// 1: 1240
// 1: 1278