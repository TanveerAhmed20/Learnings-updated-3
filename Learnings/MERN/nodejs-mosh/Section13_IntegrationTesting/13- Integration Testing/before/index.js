const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;

//app.listen returns a server object
let server;
if(process.env.NODE_ENV!=='test'){
    app.listen(port, () => winston.info(`Listening on port ${port}...`));
}