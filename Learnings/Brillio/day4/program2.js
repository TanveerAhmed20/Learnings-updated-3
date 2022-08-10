const obj ={
name :"Tanveer",
scholarid: "1815010",
getInfo : function(){
    return this.name + " " + this.scholarid;
}
};

console.log(obj);

const json = JSON.stringify(obj);
console.log(json);

console.log(obj.getInfo());