import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { LoginForm } from "./LoginForm";

// Smart component
const LoginPage = () => {
  const { formState, actions } = useLoginForm();
  // const {login, data, error, loading} = useLogin(); API HOOK
  // const navigate = useNavigate(); ROUTING HOOK

  async function handleLogin() {
    console.log(formState.email, formState.password);

    // if(formState.email.initialValue !== formState.email.value && formState.email.errorMessages.length === 0) {
    // await login(email, password); API CALL
    // if success -> updateUserContext -> navigate('/dashboard');
    // }
  }

  return (
    // page level errors
    // dumb component, can be reused.
    <LoginForm
      onSubmit={handleLogin}
      email={formState.email}
      password={formState.password}
      onUpdateEmail={actions.updateEmail}
      onUpdatePassword={actions.updatePassword}
      onReset={actions.resetForm}
      // loading={loading}
    />
  );
};

export default LoginPage;
