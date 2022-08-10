import { useState } from "react";
import Child from "./Child";

export default function App(){
const [userName,setUserName] = useState("");

function callback(name){
    setUserName(name);
}
const users = ['Aalu','Gajar','Gobi','Tamatar'];

return (
 <div>
    <h1> App Component</h1>
    <h2> user : {userName}</h2>
    {users.map((user,index)=> <Child callback ={callback} name ={user}/>)}
 </div>
)


}




    