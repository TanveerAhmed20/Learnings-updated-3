#Advanced NodeJS concepts

##### Event Loop:

Node js is single threaded event driven platform fhat is capable of running nonblocking asynchronous programs. 

An event loop is an `event-listener` which functions inside the NodeJS environment and is always ready to listen, process, and output for an event.

An event can be anything from a mouse click to a keypress or a timeout.

For more information on event loop , callstack , Node API , callback queue 


[More Information](https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/)

---


Flow of node application : 
- Javscript Code we write
- Node 's javascript side (lib folder in node repo
- process.binding() : connects js and C++ functions
- V8 : converts values between js and C++ world 
- Node's C++ side ( src folder in node repo)
-  **libuv** : gives node easy access to underlying OS

--- 

#### What Happens when we run a javascript file using node 

```javascript
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
```

--- 
##### Is nodejs single threaded ? 

Event loop is single threaded by we also have a thread pool

The thread pool consist of 4 threads by default which is part of libuv and it handles computations externally for extensive computation tasks

##### How our threads are exectuted on the main CPU core?
Suppose our main CPU has 2 cores 
Each core is supposed to handle only a single thread

If our process have 6 function executions then nodejs thread pool will assign 4 thread to the first 4 computations and 2 will be left idle until the first 4 threads have finished  executing.

our of the 4 threads 2 threads will be assigned to our 2 core CPU at a time.

**1 Core == 1 Thread**

This is the main reason why first 4 task take longer than the next 2 tasks even through we have threads running in parallel since at max only 2 threads can run at a time by our 2 core CPU.

##### Can we customize Thread Pool? 

Yes !!
in package.json 
```json
  "scripts": {
    "dev":"set UV_THREADPOOL_SIZE=7 & node threads.js"
    }
    // & run sequentially
```

**`Note : Between our cores and the node threads pool we have OS scheduler which takes care of juggling the threads between CPU cores for maximum time saving`**

--- 
##### Questions 

* Can we use the thread pool  for javascript code or can only nodejs functions use it 

Answer : We can write custom JS that uses the thread pool

* What functions in node std library use the thread pool

Answer : All 'fs' module functions . Some crypto functions . It all depends on OS


* How does this threadpool stuff fit into the even loop

Answer : Tasks running in the threadpool are the 'pendingOperations' in our code example

--- 

##### How nodejs deals with asynchronous calls

None of the event loop and the thread pool deals with the asynchronous requests . 

THe asynchronous requests are dealt by some `OS async Helpers`

which is integrated with the libuv library 

JS Code `<-` pbkdf2`<-` V8 `<-` NOde's C++ side [ libuv `<-` OS Async Helpers ] 

This is called `LIBUV OS DELEGATION`

**Delegation means to give the task to somebody else**



--- 
**Questions** 
* What functions in node std library use the OS's async features ? 

Answer : Everything networking related 

* How does this OS async stuff fit into the event loop ?

Answer : Tasks using the underlying OS are reflected in our 'pendingOSTasks' array

--- 
##### What happens when we use file system calls 

`->` We call fs.readFile 
`->` Node gets some 'stats' on the file (requires HD access)
`->` HD accessed , stats returned 
`->` Node requests to read the file 
`->` HD accesssed , file contents streamed back to app
`->` Node returns file contents to us


**HTTPS skips the thread pool directy and doesnt make use of it i.e happens outside the thread pool**

\#22 from [2] teaches about the unusual effect of file system on the thread pool

---

### Ways to Improve Node Performance

- Use Node in 'cluster' mode (Recommended)
- Use worker threads ( experimental)


#### Clustering 

Clustering creates a copy of the node application that we call cluster manager.
This copy of node instances will be helpful in running multiple threads if one thread occupies the event loop.

By default the cluster manager has the isMaster property set to true.

As we create new instances of the node process , the isMaster is set to false

Until we create a new child of the process , isMaster will be set to true 

```javascript
const cluster = require('cluster');
cluster.schedulingPolicy = cluster.SCHED_RR; // enable this else clustering won't work in windows
if(cluster.isMaster){
    cluster.fork();
    cluster.fork();
    //creating two copies of the node process
    // isMaster is set to false 
}
else{
    function delay(duration){
    const start= Date.now();
    while(Date.now()-start<duration){}  
    }
 app.get('/',(req,res)=>{
        delay(6000);
        res.send('Hi there');
    })
    app.get('/fast',(req,res)=>{
        res.send('This is fast');
    })
    app.listen(port)
}

```

Using more and more children instances doesnt mean that the application will be faster. There is always a limit of anything clustering also has a  **staturation point** .


Whenever we create a child , every child have their own thread pool
---

##### Benchmarking Node Server performance

Best way to create cluster forks is based on CPU count for best performance 

```javascript
const os = require('os')
const cpuCount = os.cpus().length;
for(let i=0;i<cpuCount;i++){
    cluster.fork();
}
```

**THUMB RULE** : match total forks to the number of physical cores in your system.

---
##### PM2 
- Widely used in production deployments
- if a process crashes , pm2 automatically restarts the process
- All the clustering behavior can be delegated to pm2 
- pm2 automates everything for us.

`For Production Use PM2 CLI` [Link to repo](https://github.com/Unitech/pm2)

```bash 
yarn global add pm2
```

**Logical cores = physical cores `multiplied` threads processed by each core in parallel**

example : mac os has 2 cores, each core can process two threads simultaneously. 

Total logical cores = 4

```bash
pm2 start index.js -i 0
```
- -i value  means tell pm2 to decide how many instances you want  , value == 0 means you want pm2 to decide the number of instances. `PM2 will set number of instances equal to number of logical cores in the system`

`Keywords` : Multithreading , Hyperthreading

---
###### Some pm2 commands

* **pm2 list** 
shows summary of what's running in pm2
* **pm2 show `<application_name>`**
shows detailed information about the application if running
* **pm2 monit**
Gives us a dashboard where we can scroll through all the different processes and show global logs for each process
* **pm2 delete index**
Delete any process run by pm2

--- 
#### Worker Threads - webworker-threads library
- Worker Threads in experimental mode 
- It uses the same thread pool 
-  Clustering much better than worker threads
- Use worker threads when u have long running functions 
---


## References
- [The Complete Node.js Event Loop](https://www.youtube.com/watch?v=6YgsqXlUoTM)
- [Advanced node for developers](https://newhire2021.udemy.com/course/advanced-node-for-developers/learn/lecture/9636106#overview)
- [Node js event loop tutorial](https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/)
- [Run many parellel http request using Nodejs](https://www.geeksforgeeks.org/how-to-run-many-parallel-http-requests-using-node-js/)
- [Nodejs Child Processes Everything you need to know](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)
- [Pm2 for nodejs-Youtube](https://www.youtube.com/watch?v=ebdKIU6SDHI)
- [Node js worker threads](https://nodejs.org/docs/latest-v16.x/api/worker_threads.html)
- [Worker Threads vs Clustering](https://stackoverflow.com/questions/61328960/when-is-better-using-clustering-or-worker-threads)
- [A complete guide to threads in Node.js](https://blog.logrocket.com/a-complete-guide-to-threads-in-node-js)