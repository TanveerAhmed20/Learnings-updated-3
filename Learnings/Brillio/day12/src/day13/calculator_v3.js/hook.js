
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
const myReducer  = ()=>{
  const [state,dispatch] = useReducer(reducer,data);
  return {state,dispatch}
}
export default myReducer;