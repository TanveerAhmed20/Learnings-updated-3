// const fs = require('fs');
const notes = require('./notes.js');
const {isEmail}= require('validator');
const yargs = require('yargs');
//challenge : create a nuew file called notes.js
// create getNOtes function that returns your notes
//3 export getNotes function
//4 from app.js load in and call the function printing message to console


// fs.writeFileSync('notes.txt',
// 'this file was creatbed by me');

// console.log(getNotes());
// console.log(isEmail("tnvrahmed98gmail.com"));

// //using chalk 

// let chk = require('chalk');

// console.log(chk.blue("Hello world"));
// console.log(process.argv);


// const command = process.argv[2];

// if(command ==='add') { console.log("add"); }
// else if(command ==='remove') { console.log("removed"); }

// // console.log(yargs.argv);

// let name = yargs.argv['title'];
// let age = yargs.argv['age'];
// console.log(name+"  "+age);

//customize yargs version 

yargs.version('1.1.0');


//create add commands

yargs.command({
    command: 'add',
    describe :'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,  // Required
            type: 'string'     
        },
        body: {  
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log(`Result of addition : ${argv.firstNumber+argv.secondNumber}`);
        notes.addNote(argv.title, argv.body);
    }
})
.command({
    command: 'remove',
    describe :'removes a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,  // Required
            type: 'string'     
        }
    },
    handler(argv){
        // console.log(`Result of subtraction: ${argv.firstNumber-argv.secondNumber}`);
        notes.removeNote(argv.title);
    }
})
.command({
    command: 'showAll',
    describe :'displays all the notes',
    handler(){
        notes.getNotes();
    }
}).parse();
