const filesys = require('fs');

// we should always use asnychronous mode because node uses
// single thread 

const files = filesys.readdirSync('./'); // synchronous mode files is a string 
console.log(files);

// the asnychronous method 

const files2 = filesys.readdir('./',(err,files) => {
    if(err) console.log('error:', err);
    else console.log(files);
});