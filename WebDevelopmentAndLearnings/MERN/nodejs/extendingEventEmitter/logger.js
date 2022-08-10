var url = 'http://mylogger.io/log';

const EventEmitter = require('events');


class Logger extends EventEmitter{
  log(message){ 
    //send http request
    console.log(message);  

    //raise an event
    this.emit('logged',{id:1,desc:"logger event"});
  }
};

module.exports  = Logger;