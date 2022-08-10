import React,{useState} from 'react';

const myHook = ()=>{
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
    return {result, validate, setResult, setEmail, setPass,onSubmitHandler};
}
export {myHook}