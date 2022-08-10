import { useState } from "react";
import "./App.css";
import FetchNews from "./Components/FetchNews";
const App = () => {

  const [result,setResult] = useState([]);
  function callback(data){
    setResult(data);
  }
  return (
   <div className = "container">
  <h1>Understanding Axios</h1>
  <FetchNews callback={callback}/>
  <div className = "result">
    {
      result && result.map((ele,idx)=><p key ={idx}>{ele.title}</p>)
    }
  </div>
   </div>
   
  );
};

export default App;
