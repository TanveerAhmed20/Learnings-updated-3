// node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers , tasks operations are recorded from myFile running

myFile.runContents();


function shouldContinue(){
    // checkone: Any pending setTimeout,setInterval,setImmediate
    // check two :any pending OStaks ? (like server listening to port)
    // check three : any pending long runing operatiosnj ? ( like  fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()){
    // 1) node looks at pendingTimers and sees if any functions are
    // ready to be called setTimeout , setInterval 
    // 2) Node looks at pendingOSTasks and pendingOperations 
    // and calls relevant callbacks
    
    // 3. pause Execution . continue when ... 
    // - a new pendingOSTask is done 
    // - a new pendingOperation is done 
    // - a timer is about to complete

    // 4) look at pendingTimers . call any setImmediate
}

