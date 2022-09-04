const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 5
//pbkdf2 is used to hashing a password in order to avoid storing a plaintext password in a database. 
/*
    crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
    - password : string 
    - salt: The salt should be as unique as possible. It is recommended that a salt is random and at least 16 bytes long. See NIST SP 800-132 for details.
    - iterations:The iterations argument must be a number set as high as possible. The higher the number of iterations, the more secure the derived key will be, but will take a longer amount of time to complete.
    - keylen : requested byte length of the result
    - digest : If digest is null, 'sha1' will be used. This behavior is deprecated, please specify a digest explicitly.
    -callback: either get result from callback or use promises 

    syntax :
    pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
    });
*/


const start = Date.now();// testing the time taken by pbkdf2

crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    //derivedKey is a Buffer
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    //derivedKey is a Buffer
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    //derivedKey is a Buffer
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    //derivedKey is a Buffer
    console.log("1:",Date.now()-start);
})
crypto.pbkdf2('riku1998','salt',1000000,64,'sha512',(err, derivedKey) => {
    if(err) throw err;
    console.log(derivedKey.toString('hex')); 
    console.log("1:",Date.now()-start);
}) // This function runs after all the functions above are finished first 



// If we run the code then we can see that  both the functons are executed at almost the same time 
// So somehow 


// libuv contains the thread pool and this thread pool consist of 4 threads
// But  none of these threads are actually used for  I/O such as database operations.


