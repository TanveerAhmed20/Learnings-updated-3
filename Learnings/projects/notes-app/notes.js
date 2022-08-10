
const fs = require('fs');

const showNotes = () =>{
    const notes = loadNotes();
    console.log(notes)
}

const addNote = (title,body) =>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter(x=>x.title ===title);
    
    debugger

    if(duplicateNotes.length>0) { console.log("already existing notes"); return notes;}

    notes.push({
        title:title,
        body : body
    });
    
    saveNotes(notes);

    console.log('New node added ...');
    console.log(notes);

};

//DELETE OPERATION
const removeNote = (title)=>{
    const notes = loadNotes();
    if(notes.length === 0) { console.log("List is empty"); return; }
    const found = notes.find(x=>x.title === title);
    
    if(found) {
        const index= notes.indexOf(found,0);
        // console.log("found at: " + index);
        notes.splice(index,1);
        saveNotes(notes);
        console.log(notes);
    }
    else console.log("item not found");
    return;
}


const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json',dataJSON);
};

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('./notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}
const getNotes = () => {
    const notes = loadNotes();
    console.log(notes);
}
module.exports = {
     getNotes:getNotes,
     addNote :addNote,
     removeNote : removeNote
};