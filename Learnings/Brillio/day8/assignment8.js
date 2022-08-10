let players = {};

//"1" : {name:Dhoni

const addToPlayers = (key,plr)=>{
    // players[key] = plr;// simple method
    players = Object.freeze({
        ...players,
        [key]: plr
    })
}

addToPlayers(1,{name:"dhoni",id:10});

players[1] = {name:"osama",id:10};

console.log(players);

//Assignment : 
// prepare notes for object immutability in javascript
// immutability helper 
// what ar ethe problems if we donot follow immutabilty concept
// why should states in redux immutabily

// giving immutability for objects 
