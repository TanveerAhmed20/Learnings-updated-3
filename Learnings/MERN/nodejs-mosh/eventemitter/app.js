const EventEmitter = require('events'); 
// Here EventEmitter is a class
const emitter = new EventEmitter();

// register a listener for events


emitter.on('logged',({id,desc})=>{
    console.log(`Listener called with id: ${id} , description: ${desc}`);
});

// raise an event 

emitter.emit('logged',{id:1,desc:"logger event"});
 

// here messageLogged is the event name 