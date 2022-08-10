
const data = require('./players.json');
const PORT = process.env.PORT|| 3008;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

function getPlayers(){
    return data;
}
const getPlayer = (id) =>{
    const result = data.find((x) => x.id === id)
  return result;
}
app.get('/players', (req, res) => {
    res.status(200).send(JSON.stringify(getPlayers()));
})
app.get('/players/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const result = data.find(x=>x.id ==id);
    console.log(result);
    res.status(200).send(getPlayer(id));
});
app.listen(PORT,()=>{
    console.log('listening on Port: '+PORT);
});
