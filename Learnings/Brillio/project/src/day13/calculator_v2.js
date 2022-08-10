import React from 'react'
import {useReducer} from 'react';
const data = {
  a:0,
  b:0,
  total:0
}
const operations = (operation,state)=>{
    switch(operation){
      case 'add': return {...state,total:parseInt(state.a)+parseInt(state.b)};
      case 'sub': return {...state,total:parseInt(state.a)-parseInt(state.b)};
      case 'mul': return {...state,total:parseInt(state.a)*parseInt(state.b)};
      case 'div': return {...state,total:parseInt(state.a)/parseInt(state.b)};
      default: return state;
    }

}
const reducer = (state,action)=>{
  switch(action.type){
    case 'result' : return operations(action.payload,state);
    case 'setA': return {...state,a:parseInt(action.payload)}
    case 'setB': return {...state,b:parseInt(action.payload)}
    default : return state;
  }
}
export default function myfunc() {
  const [state,dispatch] = useReducer(reducer,data); 
  const result = (event)=>{
    return dispatch({type:'result',payload:event.target.name})
  }
  return (
    <div className="App">
      <input name="one" id ="one" type ="number" onChange ={(event)=>dispatch({type:'setA',payload:event.target.value})}/>
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
