import React, { useDeferredValue, useState, useContext } from "react";
import "./sign-upform.styles.scss";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // user context

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password donot match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      //setting userauth object into the usercontext
      setCurrentUser(user);

      console.log("SIGN_UP_USER", user);
      // once the user is created , u generate the doc
      console.log("DISPLAYNAME PASSED : ", displayName);

      const userRefDoc = await createUserDocumentFromAuth(user, {
        displayName,
      });

      console.log("SIGN_UP_USERREFDOC", userRefDoc);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("cannot create user , email already in use");
      }
      console.log("user creation encountered an error", e);
    }
  };
  const onClickResetHandler = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="sign-up-container">
      <h1> Don't have an account ? </h1>
      <h2> Sign up with your email and password </h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          inputOptions={{
            name: "displayName",
            value: displayName,
            onChange: handleChange,
            type: "text",
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            name: "email",
            value: email,
            onChange: handleChange,
            type: "text",
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            name: "password",
            value: password,
            onChange: handleChange,
            type: "password",
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            name: "confirmPassword",
            value: confirmPassword,
            onChange: handleChange,
            type: "password",
            required: true,
          }}
        />
        <Button buttonType="inverted">SIGN UP</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
