import React, { useEffect } from "react"; // useEffect Required for redirect
import { getRedirectResult } from "firebase/auth"; // required for rediretc
import "./Authentication.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
  auth, //getRedirectResult requires this auth object, auth keeps tracks of the authentication processes

  createUserDocumentFromAuth,
 
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth); // returns an object
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    })();
  }, []);
  return (
    <div className="container">
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
