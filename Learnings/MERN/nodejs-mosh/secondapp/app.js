// const path = require('path');

// // path.parse(__filename);
// console.log(path.parse(__filename));

const os  = require('os');

var total = os.totalmem();
var freememory = os.freemem();
console.log(   `total memory: ${total}  freememory ${freememory} ` );