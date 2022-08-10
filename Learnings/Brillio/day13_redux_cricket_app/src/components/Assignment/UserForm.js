import './styles.css'
import React,{useState} from 'react'
const UserForm = () => {
const [result,setResult] = useState("");
const [email,setEmail] = useState("");
const [pass ,setPass] = useState(""); 

const validate = ()=>{
  const RegExEmail = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/ ;
  const RegExPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return RegExEmail.test(email) && RegExPass.test(pass);
}

const onSubmitHandler = (event) =>{
  event.preventDefault();
  validate()? setResult("Valid") :setResult ("invalid");
}

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