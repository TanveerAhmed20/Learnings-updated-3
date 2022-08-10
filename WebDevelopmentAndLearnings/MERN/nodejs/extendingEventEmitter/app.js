const EventEmitter = require('events'); 
// Here EventEmitter is a class
// const emitter = new EventEmitter();

// creating a Logger Class 
const Logger = require('./logger');// Logger is a class

const logger  = new Logger(); 

// here messageLogged is the event name 

// register a listener for events

logger.on('logged',({id,desc})=>{
    console.log(`Listener called with id: ${id} , description: ${desc}`);
});

logger.log('message');


