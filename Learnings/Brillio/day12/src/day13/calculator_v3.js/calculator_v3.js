
import myReducer from './hook'
import React from 'react';
export default function App() {
  const {state,dispatch} = myReducer();
  const result = (event)=>{
    return dispatch({type:'result',payload:event.target.name})
  }
  return (
    <div className="App">
      <input name="one" id ="one" type ="number" onChange ={(event)=>dispatch({type:'setA',payload:event.target.value})}/>
      <br/>
      <input name="two" id ="two" type ="number" onChange ={(event)=>dispatch({type:'setB',payload:event.target.value})}/>
      <br/>
      <button name="add" onClick={result}>ADD</button> 
      <button name="sub" onClick={result}>SUB</button> 
      <button name="mul" onClick={result}>MUL</button> 
      <button name="div" onClick={result}>DIV</button> 
      <p>{state.total}</p>
    </div>
  );
}

