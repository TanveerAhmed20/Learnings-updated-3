const config = require('config');
const express = require('express');
const app = express();
const Joi  = require('joi'); // Joi is class
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');

const startupdebugger = require('debug')('app:startup'); // returns a debugging function
const dbDebugger = require('debug')('app:db'); // returns a debugging function

// to use debug environments 
// use set debug = app.db
// set debug = app.*
//

//html templating

app.set('view engine', 'pug');
app.set('views','./views');



// CONFIGURATION

console.log('application name:' +config.get('name'));
console.log('mail server:' +config.get('mail.host'));

// setting up developmenet evironment : 

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);


// app.get();
// app.post();
// app.put();
// app.delete();
// '/' is the root directory
const courses = [
    { id: 1, name: 'Course'},
    { id: 2, name: 'Course 2'}
];

//validation logic 
function validateCourse(course){
    const schema = {
        name : Joi.string().min(3).required()
    };
 return Joi.validate(course,schema);
}
app.use(express.json()); // MIDDLEWARE FNCTION


// CREATING OUR OWN MIDDLEWARE FUNCTIOM
// next is the reference to the next middlewarefunction
// app.use(function(req, res, next) {
//     console.log('logging...');
//     next();// commenting this part will lead to infininte loop
// });
// app.use(logger);


// app.use(function(req, res, next) {
//     console.log('authenticating...');
//     next();// commenting this part will lead to infininte loop
// });

//middleware funcitons are called in sequence


//few build in middleware function


app.use(helmet());
if(app.get('env') == 'development'){
    app.use(morgan('tiny'));
    // console.log('morgan started');
    startupdebugger('morgan started');
}

app.use(express.urlencoded());
// this middleware function above
//parses incoming requrests with url encoded payloads . request has a body like : key = value & key = value

app.get('/', (req, res)=>{ 
    res.render('index',{title:'my express app',message : 'hello'});
});

app.get('/api/courses', (req, res)=>{ 
    res.send(courses);
});

//route parameters 

app.get('/api/courses/:id', (req, res)=>{ 
    // res.send(req.params.id);

    const course = courses.find(c => c.id === 
        parseInt(req.params.id));
    if(!course) return res.status(404).send('course not found');
    else res.send(course);
});

//HTTP posr request 

app.post('/api/courses', (req, res)=>{
    //create a schema to use joi
    const result = validateCourse(req.body);
    console.log(result);
    // request validation 

    if(result.error)  return res.status(400).send(result.error.details[0].message);
       
    const course = {
        id:courses.length +1,
        name : req.body.name
    };
    courses.push(course);
    res.send(course);//just to show to the client that it worked 
});

//PUT : updating already presesnt data

app.put('/api/courses/:id',(req, res)=>{
    //look up the course 
    //if not existing retunr 404
    
    const course = courses.find(c => c.id === 
        parseInt(req.params.id));
    if(!course) return res.status(404).send('course not found');
    else res.send(course);

    // if course found, update
    //validate
    //if invalid

    const {error,value} = validateCourse(req.body);
    // applied object destructuring above 
    if(error) return res.status(404).send(result.error.details[0].message);
     
    //successfully validated
    course.name = req.body.name;
    res.send(course);
});


// HTTP delete request 

app.delete('/api/courses/:id',(req,res)=>{
     //look up the course 
    //if not existing retunr 404
    
    const course = courses.find(c => c.id === 
        parseInt(req.params.id));
    if(!course) return res.status(404).send('course not found');
    else res.send(course);
    

    // object was found 
    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(courses);


});
//port
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log('listening on http://localhost: '+port));
