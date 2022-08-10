interface Point{

    x:number,
    y:number
}
function printCoordinates(pt:Point){
    console.log( pt.x , pt.y);
}
printCoordinates({x:1,y:2});