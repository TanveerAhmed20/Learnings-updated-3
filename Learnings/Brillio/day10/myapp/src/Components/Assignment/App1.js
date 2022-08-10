import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default function App1(){
const [salary,setSalary] = useState();

function callback(name){
    setSalary(name);
}
console.log("app1 called");
return (
 <div>
    <h2> Salary : {salary}</h2>
    <Child1 handleHikeSalary ={callback}/>
    <Child2 salary = {salary} />
    <Child3/>
 </div>
)


}
