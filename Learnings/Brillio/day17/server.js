const http = require('http');
const url = require('url');
const data = require('./players.json');
const CircularJSON = require('circular-json');
const PORT = process.env.PORT|| 3001;
const {StringDecoder} = require('string_decoder');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // console.log(res);
    var parsedUrl = url.parse(req.url,true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');
    console.log("request received on path",trimmedPath);
    const obj = data;
        
      
    //  console.log(req.headers);
    // const param = parsedUrl.query;
    // console.log(JSON.stringify(param));
    
    // var decoder = new StringDecoder('utf-8');
    // var buffer = '';
    // req.on('data', function (data){
    //     buffer+=decoder.write(data);
    // });
    // req.on('end', function () {
    //     buffer+=decoder.end();
    //     console.log('request received with this payload',buffer);
    // });
    // // console.log('request received with this payload',buffer);

    const params = parsedUrl.query;
    const player = parsedUrl.query.player;

    console.log(typeof player);
    console.log(obj[player]);
    // console.log(JSON.stringify(params));
    console.log("url:====" +req.url);

    function getPlayer(player){
        return data.find((x) => x.id ===player);
    }

    function getPlayers(){
        return JSON.stringify(data);
    }
    function deletePlayer(player){
        const index = data.indexOf(data.find((x) => x.id === player));
        
        // console.log(index);
        data = [...data.slice(0,index),...data.slice(index+1)]
        res.end(JSON.stringify(data));
        
    }
    console.log(req.method);
    if(path.split('?')[0] =='/players'){
        switch(req.method.toLowerCase()){
            case 'get':
                if(player!==undefined) res.end(JSON.stringify(getPlayer(player)));
                else res.end(getPlayers());
                break;
            case 'post':
                res.end(getPlayers());
                break;   
            case 'put':
                res.end(getPlayers());
                break;   
            case 'delete':
                deletePlayer(player);
                // res.end(getPlayers());
                break;
            default:
                res.end(getPlayers());
                break;
        }
    }
    else res.end(JSON.stringify(obj));

}).listen(PORT,()=>{
    console.log('listening on Port: '+PORT);
});
