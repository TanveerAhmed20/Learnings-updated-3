const http  = require('http');
const url = require('url');
const mongoose = require('mongoose');
let trainings = require('./trainings.json');
const PORT  = process.env.PORT || 3002;
mongoose.connect('mongodb://127.0.0.1:27017/Brillio');


http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin','*');
    var parsedUrl = url.parse(req.url,true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');


    function getTraining(id){
        return  trainings.find((x) => x.id ===id);
    }

    function getTrainings(){
        return JSON.stringify(trainings);
    }
    function deleteTraining(id){
        const index = trainings.indexOf(trainings.find((x) => x.id === id));
        // console.log(index);
        trainings = [...trainings.slice(0,index),...trainings.slice(index+1)]
        res.end(JSON.stringify(trainings));
    }
    function createTraining(id){


    }
    const id = parsedUrl.query.id;
    console.log(id);
    
    if(path.split('?')[0] =='/trainings'){
        switch(req.method.toLowerCase()){
            case 'get':
                if(id!==undefined) res.end(JSON.stringify(getTraining(id)));
                else res.end(getTrainings());
                break;
            case 'post':
                res.end(getTrainings());
                break;   
            case 'put':
                res.end(getTrainings());
                break;   
            case 'delete':
                deletePlayer(id);
                // res.end(getTrainings());
                break;
            default:
                res.end(getTrainings());
                break;
        }
    }
    else res.end(JSON.stringify(trainings));



}).listen(PORT,()=>console.log('listening on port :'+PORT));