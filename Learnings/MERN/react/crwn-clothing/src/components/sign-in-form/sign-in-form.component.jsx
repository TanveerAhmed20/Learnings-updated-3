import React, { useState,useContext} from "react"; // useEffect Required for redirect
import { getRedirectResult } from "firebase/auth"; // required for rediretc
import "./sign-in-form.styles.scss";
// import { UserContext } from "../../contexts/user.context";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  auth, //getRedirectResult requires this auth object, auth keeps tracks of the authentication processes
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      // update sign-in button to signout if successful
      // setCurrentUser(response); not required as i am using onAuthStateChanged

      // alert('Successfully signed In')
      // console.log("SIGN_IN_RESPONSE:", response);
    } catch (e) {
      switch(e.code){
        case 'auth/user-not-found':
          alert('User Not Found');
          break;
        case 'auth/wrong-password' :
          alert('Invalid Password');
          break;
        case 'auth/network-request-failed':
          alert('Connection Lost. Please check your Internet connection');
          break;
        default:
          alert(e.code);
      }
      // console.log(e.code);
    }
  };
  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const logGoogleUser = async () => {
    console.log("button clicked");
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user); not required as i am using onAuthStateChanged
    console.log("USER\n", user);
    // const userDOC = await createUserDocumentFromAuth(user); // this is async operation so we set it to await // commented this line , as it has been taken care in onAuthStateChanged
    // console.log("DOC\n", userDOC);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  // };
  return (
    <div className="container">
      <div className="sign-in-container">
        <h1>SignIn with Email and Password</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            inputOptions={{
              name: "email",
              value: email,
              type: "email",
              onChange: handleChange,
            }}
          />
          <FormInput
            label="Password"
            inputOptions={{
              name: "password",
              value: password,
              onChange: handleChange,
              type: "password",
            }}
          />

          <div className="buttons-container">
            <Button buttonType="submit" buttonDesign="inverted">
              SIGN IN
            </Button>
            <Button onClickFn={logGoogleUser} buttonDesign="google">
              Sign in With Google
            </Button>
          </div>

          {/* <input type="submit" value="submit" /> */}
          {/* <input type="button" onClick={onClickResetHandler} value="reset" /> */}
        </form>
        {/* <div className="buttons-container"> */}
        {/* <button onClick={logGoogleUser}>Sign in With Google PopUp</button>
      <button onClick={logGoogleRedirectUser}> Sign in With Google Redirect</button> */}
        {/* </div> */}
      </div>
      <div className="seperator"></div>
    </div>
  );
};

export default SignInForm;
