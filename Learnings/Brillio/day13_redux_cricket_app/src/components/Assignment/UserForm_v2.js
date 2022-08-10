import './styles.css'
import React from 'react'
import {myHook} from './hook'
const UserForm = () => {
const {result,validate,setEmail,setPass,setResult,onSubmitHandler} = myHook();

return (
  <div className="container">
    <form onSubmit={onSubmitHandler}>
     <label htmlFor = "email"> Email</label>
     <input type="text" onChange ={(e)=>setEmail(e.target.value)} name ="email" id="email" required/>
     <label htmlFor = "pass"> Password </label>
     <input type="text" onChange ={(e)=>setPass(e.target.value)} name ="pass" id="pass" required/>
    <button type ="submit">Validate</button>
    </form>
    <h1>{result}</h1>
  </div>
)
}
export default UserForm;