import React,{useEffect} from 'react';
import './App.css';
import {startLoading,stopLoading,usersSelector} from './Slices/UserSlice'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const loading = useSelector((state)=>state.users.loading);
  console.log(loading);
  const dispatch = useDispatch();

  return (
    <div>
      {
        loading?<p>Loading...</p>:<p>stopped</p> 
      }
      <button onClick ={()=>dispatch(startLoading())}>start</button>
      <button onClick = {()=>dispatch(stopLoading())}>Stop</button>
    </div>

  );
}

export default App;
