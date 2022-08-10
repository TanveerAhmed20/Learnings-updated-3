import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./Signup.scss";
import Navbar from "./Navbar";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Submit from './Submit'
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [details,setDetails] = useState({});
  
  const Current = () => {
    switch (step) {
      case 1:
        return (
          <>
            <UserDetails step={step} details={details} next={stepForward} />
          </>
        );
      case 2:
        return (
          <PersonalDetails step={step} details={details} next={stepForward} back={stepBackward} />
        );
      default:
        return <Submit details ={details} />
    }
  };
  const stepForward =  (data) => {
    console.log("inside step forward");
    setDetails({...details,...data});
    setStep(step+1);
  };

  const stepBackward = () => {
    setStep(step - 1);
  };
  return (
    <Fragment>
      <Navbar />
      <div className="main-body"><Current/></div>
    </Fragment>
  );
};

export default SignUp;
