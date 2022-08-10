function asyncLogic (){
	return new Promise ((resolve, reject) => {
		for(let i = 0;i<10000;i++){
			resolve("after loop");
		}
	})
}
function asyncClient(){
	console.log("inside asnychronous");
	asyncLogic().then((msg)=>console.log(msg));
	console.log("bye");
}

asyncClient();

async function asyncHello(){
    console.log('inside async hello()..');
    const response = await asyncLogic();
    console.log(response);
    console.log("bye");
}

console.log("before call");
asyncHello();
console.log("end ...");