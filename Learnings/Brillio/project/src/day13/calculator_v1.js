import {useState} from 'react';
import React from 'react'
export default function App() {
  const [a,setA] = useState();
  const [b,setB]=  useState();
  const [total , setTotal] = useState(0)
  const result = ()=>{
    return <p>{total}</p>
  }
  const change1 = (e)=>{
    setA(e.target.value)
  }
  const change2 = (e)=>{
     setB(e.target.value)
  }
  const onclickHandler = ()=>{
    setTotal(parseInt(a)+parseInt(b));
  }
  return (
    <div className="App">
      <input name="one" id ="one" type ="number" onChange={change1}/>
      <input name="two" id ="two" type ="number" onChange ={change2}/>
      <button onClick={onclickHandler}>ADD</button> 
      <p>{result()}</p>
    </div>
  );
}
